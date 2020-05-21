import { MyTopo } from './js/index';

const canvasEle = document.getElementById('canvas') as HTMLCanvasElement;
canvasEle.width = 500;
canvasEle.height = 500;

const stage = new MyTopo.Stage(canvasEle);
const scene = new MyTopo.Scene(stage);

const node = new MyTopo.Node('Hello 123');
node.setLocation(0, 20);
scene.add(node);
