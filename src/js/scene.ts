import { TopoNode } from './topo-node';
import { getTextPosition, measureTextWidth, getPoint } from './utils/index';

const nodeList: any[] = []

let __offsetWidth = 0;
let __offsetHeight = 0
let dragging: any = null;
let __canvasEle: any;
let __canvasRect: any;

export class Scene {
  public static install(ctor: any) {
    ctor.Scene = Scene;
  }

  private _ctx: any;

  public constructor(stage: IStage) {
    console.log(2223);
    this._ctx = stage.canvas.getContext('2d');
    __canvasEle = this._ctx.canvas;
    __canvasRect = __canvasEle.getBoundingClientRect();
    
    __canvasEle.addEventListener('mousemove', (e: MouseEvent) => {
      e.preventDefault(); // prevent selections

      const point = getPoint({x: e.clientX, y: e.clientY}, __canvasRect)
    
      const hasMove = nodeList.some(node => isPointInPath(node, e))
      if (!hasMove) return;

      const __ctx = this._ctx;
      __ctx.clearRect(0, 0, __ctx.canvas.width, __ctx.canvas.height);

      if (dragging && dragging.dragable) {
        dragging.x = point.x - __offsetWidth
        dragging.y = point.y - __offsetHeight
      }

      // 按节点 add 的顺序进行绘制
      nodeList.reduce((p, node) => {
        const isInPath = isPointInPath(node, e);
        node.__isActive = isInPath
        return p.then(() => node.paint(__ctx))
      }, Promise.resolve())

    });

    __canvasEle.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault(); // prevent selections

      const point = getPoint({x: e.clientX, y: e.clientY}, __canvasRect)

      nodeList.forEach(node => {
        const isInPath = isPointInPath(node, e);
        if (isInPath) {
          __offsetWidth = point.x - node.x;
          __offsetHeight = point.y - node.y;
          dragging = node;
        }
      })
    });
    
    __canvasEle.addEventListener('mouseup', (e: MouseEvent) => {
      e.preventDefault();
      dragging = null;
    });
    __canvasEle.addEventListener('mouseout', (e: MouseEvent) => {
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
    // 保证后面增加的节点不被覆盖
    setTimeout(() => nodeList.reduce((p, node) => p.then(() => node.paint(this._ctx)), Promise.resolve()), 0)
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
  const point = getPoint({x: e.clientX, y: e.clientY}, __canvasRect)
  return (point.x >= node.x && point.x <= node.x + node.width) && (point.y >= node.y && point.y <= node.y + node.height);
}

