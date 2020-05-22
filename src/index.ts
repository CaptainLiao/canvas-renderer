import { MyTopo } from './js/index';

const canvasEle = document.getElementById('canvas') as HTMLCanvasElement;
canvasEle.width = 1000;
canvasEle.height = 500;

const stage = new MyTopo.Stage(canvasEle);
const scene = new MyTopo.Scene(stage);

const node = new MyTopo.Node('hello zhong guo');
node.setLocation(100, 100);
node.setSize(80, 20);

// node.borderRadius = 5;
node.setImage('http://jp.rsscc.com/ticket/icon/ziying.png');
scene.add(node);
