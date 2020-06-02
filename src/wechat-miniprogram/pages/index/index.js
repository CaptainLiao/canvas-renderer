import {
  MyTopo
} from '../../MyTopo';

let canvasEle = null
let __pixelRatio = 1

Page({
  data: {
  },
  onLoad: function () {
    console.log(wx.getSystemInfoSync());

    const {
      pixelRatio
    } = wx.getSystemInfoSync();
    __pixelRatio = pixelRatio
    const query = wx.createSelectorQuery()
    const canvasRef = query.select('#canvas')

    canvasRef.boundingClientRect()
    canvasRef.node(res => {
      canvasEle = res.node;
      canvasEle.width = canvasEle.width * pixelRatio;
      canvasEle.height = canvasEle.height * pixelRatio;
      const ctx = canvasEle.getContext('2d')
      ctx.scale(pixelRatio, pixelRatio)
      
      this.init(canvasEle)

    })
    .exec(res => {
      console.log(res);

    })
  },

  init(canvasEle) {
    const BG_IMAGE = 'https://cn.bing.com/th?id=OIP.geUSJfZRvMHFVz6KSyp8jgHaHa&pid=Api&rs=1'

    const stage = new MyTopo.Stage(canvasEle);
    const scene = new MyTopo.Scene(stage);


    const bg = new MyTopo.Node();
    bg.setSize(canvasEle.width, canvasEle.width);
    bg.setImage(BG_IMAGE);
    bg.pixelRatio = __pixelRatio;
    bg.showSelected = false;
    bg.dragable = false;
    scene.add(bg)

    const node = new MyTopo.Node('是离开对方');
    node.setLocation(50, 50);
    node.lineHeight = 80
    node.dragable = false;
    node.font = '40px Microsoft YaHei'
    scene.add(node)

    const node2 = new MyTopo.Node('吃了吗');
    node2.setLocation(100, 0);
    node2.setSize(80, 40);
    // node2.showSelected = false;
    // node.borderRadius = 5;
    //node2.setImage('http://jp.rsscc.com/ticket/icon/ziying.png');
    scene.add(node2);
  }
})