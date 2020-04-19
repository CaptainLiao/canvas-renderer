
import { Stage } from './stage';
import { Scene } from './scene';
import { TopoNode } from './topo-node';

export class MyTopo implements Topo {
  static Stage: any;
  static Scene: any;
  static Node: any;
};

MyTopo.Stage = Stage;
MyTopo.Scene = Scene;
MyTopo.Node = TopoNode;




