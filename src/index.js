import {
  CanvasStage,
  Text,
  Node,
  Block,
  Element
} from './components'


const parser = require('./libs/fast-xml-parser/parser')
const computeLayout = require('css-layout')


class _Layout extends Element {
  constructor({
    style,
    name
  } = {}) {
    super({
      style,
      id: 0,
      name
    });

    this.elementTree = null
    this.renderContext = null

    this.renderport = {}
    this.viewport = {}
    this.debugInfo = {}

    this.hasViewPortSet = false
    this.realLayoutBox = {
      realX: 0,
      realY: 0,
    }

    this.state = STATE.UNINIT;
  }

  init(template, style) {
    let start = new Date();

    /*if( parser.validate(template) === true) { //optional (it'll return an object in case it's not valid)*/
    /*}*/
    const parseConfig = {
      attributeNamePrefix: "",
      attrNodeName: "attr", //default is 'false'
      textNodeName: "#text",
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

    this.debugInfo.xmlTree = new Date() - start;

    // XML树生成渲染树
    this.layoutTree = create.call(this, xmlTree, style);
    this.debugInfo.layoutTree = new Date() - start;
    this.add(this.layoutTree);

    const elementTree = {
      id: this.id,
      style: {
        width: this.style.width,
        height: this.style.height,
        flexDirection: 'row'
      },
      children: getChildren(this)
    }

    // 计算布局树
    computeLayout(elementTree);
    this.elementTree = elementTree;
    this.debugInfo.renderTree = new Date() - start;

    let rootEle = this.children[0];

    if (rootEle.style.width === undefined || rootEle.style.height === undefined) {
      console.error('Please set width and height property for root element');
    } else {
      this.renderport.width = rootEle.style.width;
      this.renderport.height = rootEle.style.height;
    }

    this.state = STATE.INITED;
  }

  layout(context) {
    let start = new Date();

    this.renderContext = context;

    if (this.renderContext) {
      this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
    }

    if (!this.hasViewPortSet) {
      console.error('Please invoke method `updateViewPort` before method `layout`');
    }

    layoutChildren.call(this, this.elementTree.children, this.children);

    this.debugInfo.layoutChildren = new Date() - start;

    // 计算真实的物理像素位置，用于事件处理
    updateRealLayout(this.elementTree.children, this.children, this.viewport.width / this.renderport.width);

    this.debugInfo.updateRealLayout = new Date() - start;

    renderChildren(this.children, context);

    this.debugInfo.renderChildren = new Date() - start;



    this.state = STATE.RENDERED;
  }

  initRepaint() {

  }

  repaint() {
    const start = new Date();
    repaintChildren(this.children);
    this.emit('repaint__done');
  }

  getChildByPos(tree, x, y) {
    let list = Object.keys(tree.children);

    for (let i = 0; i < list.length; i++) {
      const child = tree.children[list[i]];
      const box = child.realLayoutBox;

      if ((box.realX <= x && x <= box.realX + box.width) &&
        (box.realY <= y && y <= box.realY + box.height)) {
        if (Object.keys(child.children).length) {
          return this.getChildByPos(child, x, y);
        } else {
          return child;
        }
      }
    }

    return tree;
  }

  getElementsById(id) {
    return _getElementsById(this, [], id);
  }

  getElementsByClassName(className) {
    return _getElementsByClassName(this, [], className);
  }

  destroyAll(tree) {
    if (!tree) {
      tree = this;
    }

    const children = tree.children;

    children.forEach(child => {
      child.destroy();
      this.destroyAll(child);
      child.destroySelf && child.destroySelf();
    });
  }

  clear() {
    this.destroyAll();
    this.elementTree = null;
    this.children = [];
    this.layoutTree = {};
    this.state = STATE.CLEAR;

    canvasPool.getList().forEach(item => {
      item.context && item.context.clearRect(0, 0, item.canvas.width, item.canvas.height);
      item.elements = [];

      item.canvas = null;
      item.context = null;
    })

    if (this.renderContext) {
      this.renderContext.clearRect(0, 0, this.renderContext.canvas.width, this.renderContext.canvas.height);
    }

  }

  clearPool() {
    imgPool.clear();
    canvasPool.clear();
  }

  clearAll() {
    this.clear();

    this.clearPool();
  }

  loadImgs(arr) {
    arr.forEach(src => {
      let img = createImage();

      imgPool.set(src, img);

      img.onload = () => {
        img.loadDone = true;
      }

      img.onloadcbks = [];
      img.src = src;
    });
  }

  registBitMapFont(name, src, config) {
    const font = new BitMapFont(name, src, config)
    this.bitMapFonts.push(font)
  }
}

let Layout = new _Layout({
  style: {
    width: 0,
    height: 0,
  },
  name: 'layout'
});

export default Layout;


var stage = new CanvasStage({
  el: document.getElementById('canvas'),
  width: 300,
  height: 300,
  ratio: window.devicePixelRatio || 1
})
stage.add(Node)


var options = {
  attributeNamePrefix: "",
  attrNodeName: 'attr', //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: false,
  ignoreNameSpace: true,
  allowBooleanAttributes: true,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  format: true,
  stopNodes: ["parse-me-as-string"]
};


let xmlData = `
<view id="container">
  <view id="testText" class="redText" value="hello canvas">adsdf</view>
  <view class="t2">这是t2</view>
</view>
`;

const style = {
  container: {
    margin: 8,
    padding: 2,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8
  },
  testText: {
    color: '#ff0000',
    fontSize: 30,
    textAlign: 'center',
  },
}



var jsonObj = parser.parse(xmlData, options);
let nodeTree = createRenderTree(jsonObj.children[0], style)
console.log(nodeTree);







function createRenderTree(node, style) {
  // 记录每一个标签应该用什么类来处理
  const constructorMap = {
    view: Block,
    text: Text,
    image: Block,
    ['!xml']: Block,
    //scrollview: ScrollView,
  }
  const _constructor = constructorMap[node.name];

  let children = node.children || [];

  let attr = node.attr || {};
  const id = attr.id || '';
  // 实例化标签需要的参数，主要为收集样式和属性
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
          return Object.assign(res, style[oneClass])
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

  // 用于后续元素查询
  args.idName = id;
  args.className = attr.class || '';
  args.text = node['#text'] || '';

  const element = new _constructor(args)
  element.root = this;

  // 递归处理
  children.forEach(childNode => {
    const childElement = createRenderTree.call(this, childNode, style);

    element.add(childElement);
  });

  return element;
}