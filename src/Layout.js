import Element from './Element'
import {getTextWidth} from './utils/measureText'
import * as parser from './libs/my-parser'
import computeLayout from 'css-layout'

// export const STATE = {
//   "UNINIT": "UNINIT",
//   "INITED": "INITED",
//   "RENDERED": "RENDERED",
//   "CLEAR": "CLEAR",
// }

const createRenderTree = function (node, style, scripts) {
  const attr = node.attr || {};
  const id = attr.id || ''
  const events = []
  const args = Object.keys(attr)
    .reduce((obj, key) => {
      const value = attr[key]
      const attribute = key;

      if (key === 'id') {
        obj.style = {
          ...obj.style,
          ...style[id]
        }
        return obj
      }

      if (key === 'class') {
        obj.style = value.split(/\s+/).reduce((res, oneClass) => {
          return {...res, ...style[oneClass]}
        }, obj.style || {})

        return obj
      }

      if (value === 'true') {
        obj[attribute] = true
      } else if (value === 'false') {
        obj[attribute] = false
      } else {
        obj[attribute] = value
      }

      if (scripts && attribute.indexOf('@') == 0) {
        const eventName = attribute.substring(1)
        events.push({name: eventName, handler: scripts[value]})
      }

      return obj;
    }, {})


  args.idName = id
  args.className = attr.class || ''
  args._text_ = node.text

  const NODE = this['$' + node.nodeName];
  const element = new NODE(args)
  element.root = this;

  // register event
  events.forEach(event => {
    element.addEventListener(event.name, event.handler)
  });

  (node.children || []).forEach(childNode => {
    const childElement = createRenderTree.call(this, childNode, style, scripts);

    element.add(childElement);
  });

  return element;
}

function setLayoutBox(children) {
  children.forEach(child => {
    const parentBox = child.parent.layoutBox
    child.layoutBox = {
      x: ~~parentBox.x + child.layout.left,
      y: ~~parentBox.y + child.layout.top,
      width: child.layout.width,
      height: child.layout.height,
    }

    setLayoutBox.call(this, child.children)
  })
}

class GatherTime {
  constructor() {
    this.start = new Date()
    this.time = `start`
    this.total = 0
    this._time = [0]
  }
  gather(phase) {
    const last = this._time[this._time.length - 1]
    const costTime = new Date() - this.start - last
    this._time.push(costTime)
    this.time += ` -> ${phase}: ${costTime}ms`
    this.total = new Date() - this.start + 'ms'
  }
}

export default class Layout extends Element {
  constructor({
    style,
    name
  } = {}) {
    super({
      style,
      id: 0,
      name
    });

    this.renderContext = null

    this.renderport = {}
    this.viewport = {}
    this.__cost_time = null

    this.hasViewPortSet = false
    this.layoutBox = {
      x: 0,
      y: 0,
    }
  }

  init(template, style, scripts) {
    this.__cost_time = new GatherTime()

    const parseConfig = {
      attributeNamePrefix: "",
      attrNodeName: "attr", //default is 'false'
      textNodeName: "_text_",
      ignoreAttributes: false,
      ignoreNameSpace: true,
      allowBooleanAttributes: true,
      parseNodeValue: false,
      parseAttributeValue: false,
      trimValues: true,
      parseTrueNumberOnly: false,
    }

    const jsonObj = parser.parse(template, parseConfig, true);
    const xmlTree = jsonObj[0];

    this.__cost_time.gather('parseXml')

    // XML树生成渲染树
    const renderTree = createRenderTree.call(this, xmlTree, style, scripts);
    const renderTree2 = createRenderTree.call(this, xmlTree, style, scripts)
    this.__cost_time.gather('renderTree')
    // 计算布局树
    computeLayout(renderTree);
    // 要处理文字换行，需要两棵renderTree
    reCalculate([renderTree2], [renderTree])
    computeLayout(renderTree2);
    this.__cost_time.gather('layoutTree')

    this.add(renderTree2);

    const rootEle = this.children[0];

    if (rootEle.style.width === undefined || rootEle.style.height === undefined) {
      console.error('Please set width and height property for root element');
    } else {
      this.renderport.width = rootEle.style.width;
      this.renderport.height = rootEle.style.height;
    }

    setLayoutBox.call(this, this.children)
    console.log(this.children);
    
    return this
  }

  render(ctx) {
    this.renderContext = ctx;

    if (this.renderContext) {
      this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
    }
    // TODO: 待优化
    const renderChildren = children => {
      return children.reduce((promise, child) => {
        return promise.then(() => {
          return Promise.resolve()
            .then(() => child.render(ctx))
            .then(() => renderChildren(child.children))
        })
      }, Promise.resolve())
    }
    return renderChildren(this.children)
      .then(() => this.__cost_time.gather('paintTree'))
  }
}

// helper
function reCalculate(list, layoutList) {
  list.forEach((child, index) => {
    // 处理文字换行
    if (child.type === "Text") {
      const currentLayoutNode = layoutList[index]
      const parent = currentLayoutNode.parent
      child.style.width = Math.min(
        parent.layout.width - 2 * currentLayoutNode.layout.left,
        currentLayoutNode.layout.width
      )

      const contentWidth = child.style.width
        - child.style.borderLeftWidth
        - child.style.borderRightWidth
        // - child.style.paddingLeft
        // - child.style.paddingRight

      let lineIndex = 1
      let lineText = ''
      for (let i = 0; i < (child.text || '').length; i++) {
        const textWidth = getTextWidth({text: lineText + child.text[i], style: child.style})
        if (textWidth > contentWidth) {
          child.__lines.push({text: lineText})
          lineText = ''
          lineIndex += 1
        }
        lineText += child.text[i]
      }
      child.__lines.push({text: lineText})

      child.style.height = parseFloat(child.style.lineHeight) * lineIndex
        + child.style.paddingBottom
        + child.style.paddingTop
        + child.style.borderTopWidth
        + child.style.borderBottomWidth
    }
    reCalculate(child.children, layoutList[index].children)
  })
}





