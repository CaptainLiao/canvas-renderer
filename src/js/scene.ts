import { TopoNode } from './topo-node';

export class Scene {
  public static install(ctor: any) {
    ctor.Scene = Scene;
  }

  private _ctx: any;

  public constructor(stage: IStage) {
    this._ctx = stage.canvas.getContext('2d');
  }

  public add(node: TopoNode) {
    node._setContext(this._ctx);
    node.paint(this._ctx);

    this._ctx.canvas.addEventListener('mousemove', node._mousemove);
  }
}

