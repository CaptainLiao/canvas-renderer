import { MyTopo } from './js/index';

const canvasEle = document.getElementById('canvas') as HTMLCanvasElement;
canvasEle.width = 1000;
canvasEle.height = 500;

const stage = new MyTopo.Stage(canvasEle);
const scene = new MyTopo.Scene(stage);

const node = new MyTopo.Node('Hello 123');
node.setLocation(100, 100);
node.setSize(200, 100);
node.borderRadius = 5;
scene.add(node);
