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
  public showSelected = true;
  public __isActive = false;

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
  }
  public mousemove(fn: any) {
    this.callback.mousemove = fn;
  }

  public _mousemove = (e: MouseEvent, node: any) => {
    if (this.__isActive) {
      this.callback.mousemove();
    }
    paint.drawBorder(__ctx, node);
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

}

