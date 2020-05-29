import { TopoNode } from './topo-node';
import { getTextPosition, measureTextWidth } from './utils/index';

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
      
      // 会导致拖动节点卡顿
      // const hasMove = nodeList.some(node => isPointInPath(node, e))
      // if (!hasMove) return;

      const __ctx = this._ctx;
      __ctx.clearRect(0, 0, __ctx.canvas.width, __ctx.canvas.height);

      if (dragging) {
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
      e.preventDefault();
      dragging = null;
    });
    this._ctx.canvas.addEventListener('mouseout', (e: MouseEvent) => {
      e.preventDefault();
      dragging = null;
    });

  }

  public add(node: TopoNode) {
    mergeNode(this._ctx, node);

    nodeList.push(node);
    node._setContext(this._ctx);
    this.__orderPaint();
  }
  private __orderPaint() {
    setTimeout(() => {
      nodeList.reduce((p, node) => {
        return p.then(() => node.paint(this._ctx))
      }, Promise.resolve())
    })
  }
}

function mergeNode(ctx: CanvasRenderingContext2D, node: any) {
  const textWidth = measureTextWidth(ctx, node);
  node.width = Math.max(node.width, textWidth);
  node.height = node.height || node.lineHeight;
  node.textWidth = textWidth;
  Object.assign(node, getTextPosition(node))
}

function isPointInPath(node: any, e: MouseEvent) {
  return (e.x >= node.x && e.x <= node.x + node.width) && (e.y >= node.y && e.y <= node.y + node.height);
}

