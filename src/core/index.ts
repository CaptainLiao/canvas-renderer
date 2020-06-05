
import { Scene } from './scene';
import { Stage } from './stage';
import { TopoNode } from './topo-node';

export class MyTopo implements Topo {
  public static Stage: any;
  public static Scene: any;
  public static Node: any;
  public static use(chajian) {
    chajian.install(MyTopo)
  }
}

MyTopo.use(Stage);
MyTopo.use(Scene);
MyTopo.use(TopoNode);


