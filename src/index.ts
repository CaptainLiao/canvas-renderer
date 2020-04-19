import { MyTopo } from './js/index';

const canvasEle = document.getElementById('canvas');
const stage = new MyTopo.Stage(canvasEle);
const scene = new MyTopo.Scene(stage);

const node = new MyTopo.Node('Hello');
node.setLocation(0, 20);
scene.add(node);
