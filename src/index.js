import {
  Text,
  View,
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

  const NODE = nodeMap[node.name];
  const element = new NODE(args)
  element.root = this;

  node.children.forEach(childNode => {
    const childElement = createRenderTree.call(this, childNode, style);

    element.add(childElement);
  });

  return element;
}

function layoutHelper(children) {
  children.forEach(child => {
    const parentBox = child.parent.layoutBox
    child.layoutBox = {
      x: ~~parentBox.x + child.layout.left,
      y: ~~parentBox.y + child.layout.top,
      width: child.layout.width,
      height: child.layout.height
    }

    layoutHelper.call(this, child.children)
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

    this.state = STATE.INITED;

    layoutHelper.call(this, this.children);
  }

  layout(context) {
    this.renderContext = context;

    if (this.renderContext) {
      this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
    }

    
    
  }

  initRepaint() {
    // this.on('repaint', () => {
    //   this.repaint();
    // });
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
  <view id="testText" class="redText" value="hello canvas">adsdf</view>
  <view class="t2">这是t2</view>
</view>
`;

const style = {
  container: {
    diplay: 'flex',
    flexDirection: 'row',
    width: 200,
    height: 200,
    margin: 8,
    padding: 2,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8
  },
  testText: {
    flex: 1,
    color: '#ff0000',
    fontSize: 30,
    textAlign: 'center',
  },
  t2: {
    flex: 1,
    position: 'absolute',
    top: 20,
    left: 20
  }
}

layout.init(xmlData, style)


console.log(layout);
