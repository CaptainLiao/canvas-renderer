import { TopoNode } from './topo-node';

export class Scene {
  public static install(ctor: any) {
    ctor.Scene = Scene;
  }
  public nodeList: any[] = [];

  private _ctx: any;

  public constructor(stage: IStage) {
    this._ctx = stage.canvas.getContext('2d');
  }

  public add(node: TopoNode) {
    const ctx = this._ctx;
    ctx.font = node.font;
    node.width = Math.max(node.width, ctx.measureText(node.text).width);
    node.height = node.height || node.lineHeight;

    this.nodeList.push(node);
    node._setContext(this._ctx);
    node.paint(this._ctx);

    this._ctx.canvas.addEventListener('mousemove', (e: MouseEvent) => {
      node.__isActive = isPointInPath(node, e);
      node._mousemove(e, node)
    });
    this._ctx.canvas.addEventListener('mousedown', (e: MouseEvent) => {
      node.__isActive = isPointInPath(node, e);
      node._mouseDown(e)
    });
  }
}

function isPointInPath(node: any, e: MouseEvent) {
  return (e.x >= node.x && e.x <= node.x + node.width) && (e.y >= node.y && e.y <= node.y + node.height);
}

