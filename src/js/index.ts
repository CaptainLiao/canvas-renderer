
import { Scene } from './scene';
import { Stage } from './stage';
import { TopoNode } from './topo-node';

export class MyTopo implements Topo {
  public static Stage: any;
  public static Scene: any;
  public static Node: any;
}

Stage.install(MyTopo);
Scene.install(MyTopo);
TopoNode.install(MyTopo);


