import { TopoNode } from './topo-node';

const nodeList: any[] = []
let __offsetWidth = 0;
let __offsetHeight = 0
let dragging: any = null;

export class Scene {
  public static install(ctor: any) {
    ctor.Scene = Scene;
  }

  private _ctx: any;

  public constructor(stage: IStage) {
    this._ctx = stage.canvas.getContext('2d');

    this._ctx.canvas.addEventListener('mousemove', (e: MouseEvent) => {
      e.preventDefault(); // prevent selections
      const __ctx = this._ctx;

      if (dragging) {
        __ctx.clearRect(0, 0, __ctx.canvas.width, __ctx.canvas.height);
        dragging.x = e.clientX - __offsetWidth
        dragging.y = e.clientY - __offsetHeight
      }

      nodeList.forEach(node => {
        const isInPath = isPointInPath(node, e);
        node.__isActive = isInPath
        node.paint(__ctx)
      })
    });

    this._ctx.canvas.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault(); // prevent selections
      nodeList.forEach(node => {
        const isInPath = isPointInPath(node, e);
        if (isInPath) {
          __offsetWidth = e.x - node.x;
          __offsetHeight = e.y - node.y;
          dragging = node;
        }
      })
    });
    
    this._ctx.canvas.addEventListener('mouseup', (e: MouseEvent) => {
      e.preventDefault(); // prevent selections
      dragging = null;
    });

  }

  public add(node: TopoNode) {
    const ctx = this._ctx;
    ctx.font = node.font;
    node.width = Math.max(node.width, ctx.measureText(node.text).width);
    node.height = node.height || node.lineHeight;

    nodeList.push(node);
    node._setContext(this._ctx);
    node.paint(this._ctx);
  }
}

function isPointInPath(node: any, e: MouseEvent) {
  return (e.x >= node.x && e.x <= node.x + node.width) && (e.y >= node.y && e.y <= node.y + node.height);
}
