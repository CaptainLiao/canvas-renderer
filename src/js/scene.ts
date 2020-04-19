import { TopoNode } from "./topo-node";

export class Scene {
  _stage: IStage;
  _ctx: any;
  node: TopoNode;

  static install(ctor: any) {
    ctor.Scene = Scene;
  }

  constructor(stage: IStage) {
    this._stage = stage;
    this._ctx = stage.canvas.getContext('2d');
  }

  add(node: TopoNode) {
    this.node = node;
    this.__paintTextNode();
  }

  __paintTextNode() {
    const {
      text,
      x,
      y,
      font,
      textBaseline
    } = this.node;
    console.log(this.node)
    this._ctx.font = font;
    this._ctx.textBaseline = textBaseline;
    this._ctx.fillText(text, x, y);
  }
}