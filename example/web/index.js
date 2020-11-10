import {
  CanvasStage,
  Text,
  Node,
  Block
} from './CanvasStage'

const data = {
  text: {
    color: '#8d8d8d',
    fontSize: '14px',
    fontFamily: `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFangSC",\
      "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC",\
      "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun,sans-serif\
    `,
    text: '速度力量的算法理论考试的付款了',

    marginTop: 40,
    marginLeft: 10,
    
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    
    backgroundColor: '#eee',
    borderColor: '#8d8d8d',
    borderWidth: 2,
    broderRadius: 8
  },
  Block: {
    x: 0,
    y: 0,
    width: 300,
    height: 300,
    borderColor: '#ccc',

    text: {
      color: '#333',
      text: '点我啊'
    }
  }
}


var stage = new CanvasStage({
  el: document.getElementById('canvas'),
  width: 300,
  height: 300,
  ratio: window.devicePixelRatio || 1
})
stage.add(Node)

var text = new Text(data.text)

var block = new Block(data.Block)


import parser from '../../src/libs/fast-xml-parser/parser'


var options = {
  attributeNamePrefix : "@_",
  attrNodeName: false, //default is 'false'
  textNodeName : "#text",
  ignoreAttributes : false,
  ignoreNameSpace : false,
  allowBooleanAttributes : false,
  parseNodeValue : true,
  parseAttributeValue : false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  format: true,
  stopNodes: ["parse-me-as-string"]
};


 

let xmlData = `
<div id="container">
  <text id="testText" class="redText" value="hello canvas">adsdf</text>
  <view class="t2">这是t2</view>
</div>

<view id="container">
  <text id="testText" class="redText" value="hello canvas">adsdf</text>
  <view class="t2">这是t2</view>
</view>

<div id="container2">
  <text id="testText" class="redText" value="hello canvas">adsdf</text>
  <view class="t2">这是t2</view>
</div>
`;


var jsonObj = parser.parse(xmlData,options);

console.log(jsonObj);



let style = {
  container: {
    width: 200,
    height: 100,
    backgroundColor: '#ffffff',
    justContent: 'center',
    alignItems: 'center',
  },
  testText: {
    color: '#ff0000',
    width: 200,
    height: 100,
    lineHeight: 100,
    fontSize: 30,
    textAlign: 'center',
  }
}

