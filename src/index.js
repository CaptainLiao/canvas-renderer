import {
  Text,
  View,
  canvasRenderer,
  Element
} from './components'

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
  image: View,
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
      height: child.layout.height
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
    const xmlTree = jsonObj.children[0];
    this.__cost_time.xmlTree = new Date() - start;

    // XML树生成渲染树
    const renderTree = createRenderTree.call(this, xmlTree, style);
    this.__cost_time.renderTree = new Date() - start;
    this.add(renderTree);

    // 计算布局树
    computeLayout(renderTree);
    this.__cost_time.layoutTree = new Date() - start;

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
    const renderChildren = children => {
      children.forEach(child => {
        child.render(ctx)
        return renderChildren(child.children)
      })
    }
    renderChildren(this.children)
  }
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
  <view class="t2" id="t2">
    <text class="t3" value="这是t2 value">这是t2廖大爷这是t2廖大爷这是t2廖大爷这是t2廖大爷</text>
  </view>
  <view class="redText" value="hello canvas">adsdf</view>
</view>
`;

const style = {
  container: {
    diplay: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 200,
    margin: 8,
    padding: 2,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8
  },
  t2: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
  },
  t3: {
    backgroundColor: 'rgb(0, 120, 255)',
    borderWidth: 1,
    borderRadius: 8,
    borderTopColor: '#ffffff',
  },
  redText: {
    marginTop: 20,
    flex: 1,

    backgroundColor: 'rgba(237,241,247,1)',
    borderRadius: 6,
    textAlign: 'center',
  },
}

const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')
const dpr = window.devicePixelRatio
const w = window.innerWidth
const h = window.innerHeight
canvas.width = w * dpr
canvas.height = h * dpr
canvas.style.backgroundColor = '#eee'
ctx.scale(dpr, dpr)

layout.init(xmlData, style)
  .render(ctx)

console.log(layout);

