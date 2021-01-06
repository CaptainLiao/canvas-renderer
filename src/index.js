import {
  Text,
  View,
  Image,
  canvasRenderer,
  Element
} from './components'

import measureText from './utils/measureText'

export const STATE = {
  "UNINIT": "UNINIT",
  "INITED": "INITED",
  "RENDERED": "RENDERED",
  "CLEAR": "CLEAR",
}


const parser = require('./libs/fast-xml-parser/parser')
const computeLayout = require('css-layout')

const nodeMap = {
  view: View,
  text: Text,
  image: Image,
  scrollview: View,
}

const createRenderTree = function (node, style) {
  const attr = node.attr || {};
  const id = attr.id || ''
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

      return obj;
    }, {})


  args.idName = id
  args.className = attr.class || ''
  args._text_ = node._text_

  const NODE = nodeMap[node.name];
  const element = new NODE(args)
  element.root = this;

  node.children.forEach(childNode => {
    const childElement = createRenderTree.call(this, childNode, style);

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

class Layout extends Element {
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
    this.__cost_time = {}

    this.hasViewPortSet = false
    this.layoutBox = {
      x: 0,
      y: 0,
    }
  }

  init(template, style) {
    const start = new Date();

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
    this.__xmlTree = jsonObj.children[0];
    console.log(jsonObj.children);
    
    this.__style = style
    this.__cost_time.xmlTree = new Date() - start;

    // XML树生成渲染树
    const renderTree = createRenderTree.call(this, this.__xmlTree, this.__style);
    this.__cost_time.renderTree = new Date() - start;
    // 计算布局树
    computeLayout(renderTree);
    this.__cost_time.layoutTree = new Date() - start;

    // TODO: 优化文字换行的问题
    const renderTree2 = createRenderTree.call(this, this.__xmlTree, this.__style)
    reCalculate([renderTree2], [renderTree])
    computeLayout(renderTree2);

    this.add(renderTree2);

    const rootEle = this.children[0];

    if (rootEle.style.width === undefined || rootEle.style.height === undefined) {
      console.error('Please set width and height property for root element');
    } else {
      this.renderport.width = rootEle.style.width;
      this.renderport.height = rootEle.style.height;
    }

    setLayoutBox.call(this, this.children)
    
    return this
  }

  render(ctx) {
    canvasRenderer(ctx);
    this.renderContext = ctx;

    if (this.renderContext) {
      this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
    }
    const renderChildren = async children => {
      for (const child of children) {
        await child.render(ctx)
        renderChildren(child.children)
      }
    }
    renderChildren(this.children)
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
      for (let i = 0; i < child.text.length; i++) {
        let _layout = measureText({text: lineText + child.text[i], style: child.style})
        if (_layout.width > contentWidth) {
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


let layout = new Layout({
  style: {
    width: 0,
    height: 0,
  },
  name: 'layout'
});

export default layout;



let xmlData = `
<view id="container">
  <image src="https://mdn.mozillademos.org/files/5395/backdrop.png" class="img"></image>
  <text class="t3" value="这是t2 value">这真的是一条非常长非常长非常 长非常长非常长非常长 非常长非常长非常长非常长的字符串.</text>
  <view class="redText"></view>
</view>
`;

const style = {
  container: {
    position: 'relative',
    diplay: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 200,
    margin: 10,
    padding: 2,
    backgroundColor: '#999',

    // borderRadius: 12,
    // borderWidth: 10
  },

  img: {
    position: 'absolute',
    top:0,
    width: 200,
    height: 200
  },

  t3: {
    margin: 8,
    padding: 10,
    paddingRight: 10,

    backgroundColor: 'rgb(0, 120, 255)',

    borderWidth: 10,
    borderLeftColor: '#000',
    borderTopColor: '#fff',
    borderRightColor: '#000',
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  redText: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'rgba(237,241,247,1)',
    borderRadius: 6,
    textAlign: 'center',
  },
}

const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')
const dpr = window.devicePixelRatio
const w = 600
const h = 600
canvas.width = w*dpr
canvas.height = h*dpr
canvas.style.width = `${w}px`
canvas.style.height = `${h}px`
canvas.style.backgroundColor = '#eee'

ctx.scale(dpr, dpr)



layout.init(xmlData, style)
  .render(ctx)

console.log(layout);
drawGrid(ctx)



function drawGrid(ctx) {
  ctx.save()
  const gap = 10
  for (let i = 1; i < w/gap; ++i) {
    ctx.moveTo(i * gap, 0)
    ctx.lineTo(i*gap, h)
  }
  for (let i = 1; i < w/gap; ++i) {
    ctx.moveTo(0, i*gap)
    ctx.lineTo(w, i*gap)
  }
  for (let i = 0; i < w; i += 2) {
    ctx.fillText(i*gap*2, i*gap*2 - 6, 10)
  }

  ctx.strokeStyle = 'rgba(0, 0, 0,.15)'
  ctx.stroke()
  ctx.restore()
}

