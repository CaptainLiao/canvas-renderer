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
    this._ctx = stage.canvas.getContext('2d');
    this._ctx.$rowCanvasElement = stage.canvas;
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
    __orderPaint(this._ctx);
  }
}

let isPainted = false;
function __orderPaint(ctx) {
  // 保证后面增加的节点不被覆盖
  setTimeout(async () => {
    if (isPainted) return
    isPainted = true

    const startTime = Date.now()
    for (const node of nodeList) {
      await node.paint(ctx)
    }
    console.log(`****** End Of Drawing: ${Date.now() - startTime}ms ******`);
  }, 0)
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

function isPointInPolygon(point: Point, polygon: any) {
  let crossNumbers: number = 0;
  const len = polygon.length;
  for (let i = 0; i < polygon.length; i++) {
    if (__isIntersection(point, polygon[i], polygon[(i + 1) % len])) {
      crossNumbers += 1;
    }
  }
  return crossNumbers % 2 === 1;
}

function isPointInCircle(point: number, circle: any) {

}

function __isIntersection(p: Point, p1: Point, p2: Point) {
  // 假设 p1、p2 连成线段为 l  
  // 1. l 水平
  if (p1.y === p2.y) return false;
  // 2. p 点在 l 上方
  if (p.y > Math.max(p1.x, p2.x)) return false;
  // 3. p 点在 l 下方
  if (p.y < Math.min(p1.x, p2.x)) return false;

  const crossPointX = p2.x - (p2.x - p1.x) / (p2.y - p1.y) * (p2.y - p.y);

  return crossPointX > p.x;
}

