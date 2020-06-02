import { MyTopo } from '../core/index';

const canvasEle = document.getElementById('canvas') as HTMLCanvasElement;
canvasEle.width = window.innerWidth;
canvasEle.height = window.innerHeight;

const BG_IMAGE = 'https://cn.bing.com/th?id=OIP.geUSJfZRvMHFVz6KSyp8jgHaHa&pid=Api&rs=1'

const stage = new MyTopo.Stage(canvasEle);
const scene = new MyTopo.Scene(stage);


const bg = new MyTopo.Node();
bg.setSize(canvasEle.width, canvasEle.width);
bg.setImage(BG_IMAGE);
bg.showSelected = false;
bg.dragable = false;
scene.add(bg)

const node = new MyTopo.Node('是离开对方');
node.setLocation(100, 100);
node.setSize(80, 20);
node.fontColor = '#fff'
node.textPosition = 'BottomCenter'
node.dragable = false;

// node.borderRadius = 5;
// node.setImage('./images/ziying.png');
// node.setImage('http://jp.rsscc.com/ticket/icon/ziying.png');
scene.add(node);

const node2 = new MyTopo.Node('吃了吗liaofy');
node2.setLocation(100, 200);
node2.setSize(80, 40);
// node2.showSelected = false;
// node.borderRadius = 5;
//node2.setImage('http://jp.rsscc.com/ticket/icon/ziying.png');
scene.add(node2);

setTimeout(() => {
  console.log(stage.toDataURL());
  
}, 1500)