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



