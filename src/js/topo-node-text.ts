import { ETextPosition } from '../const/index';
import { paint } from './utils/paint';

let __ctx: any;

export class TopoTextNode implements ITopoNode {
  public static install(ctor: any) {
    ctor.TextNode = TopoTextNode;
  }

  public text = '';
  public x = 0;
  public y = 0;
  public visible = true;
  public font = '12px Microsoft YaHei';
  public fontColor = '#000';
  public lineHeight = 22;
  public textPosition = ETextPosition.BottomCenter;
  public textOffsetY = 0;
  public showSelected = false;

  private callback = {
    mousemove: () => {},
    mouseout: () => {}
  };

  public constructor(text: string) {
    this.text = text;
  }

  public setLocation(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public mouseover(fn: any) {
    if (fn) fn();
    if (this.showSelected) return;

    this.showSelected = true;
    this.paint(__ctx);
  }
  public mousemove(fn: any) {
    this.callback.mousemove = fn;
  }

  public _mousemove = (e: MouseEvent) => {
    const isPointInPath = __ctx.isPointInPath(e.x, e.y);

    if (isPointInPath) {
      this.callback.mousemove();

      if (this.showSelected) return;
      this.showSelected = true;
      this.drawSelectZone(__ctx);
      return;
    }

    this.showSelected = false;
    this.drawSelectZone(__ctx);
  }

  public mouseout(fn: any) {
    this.callback.mouseout = fn;
  }

  public _setContext(ctx: any) {
    __ctx = ctx;
  }
  public paint(ctx: any) {
    paint.drawText(ctx, this);
  }

  public drawSelectZone(ctx: CanvasRenderingContext2D) {
    const cNode = JSON.parse(JSON.stringify(this));
    const pad = 2;
    const c = this.showSelected ? 'rgba(0,0,0,0.2)' : 'transparent';

    paint.drawRect(ctx, {
      ...cNode,
      x: cNode.x - pad,
      y: cNode.y - pad,
      width: cNode.width + 2 * pad,
      height: cNode.height + 2 * pad,
      borderColor: c,
      backgroundColor: c
    });
  }

}

