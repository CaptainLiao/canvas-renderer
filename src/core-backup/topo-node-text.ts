import { ETextPosition } from './const/index';
import { paint } from './utils/index';

let __ctx: any;
let __offsetWidth: number;
let __offsetHeight: number;
let __isMouseDown: boolean;

export class TopoTextNode implements ITopoNode {
  public static install(ctor: any) {
    ctor.TextNode = TopoTextNode;
  }

  public x = 0;
  public y = 0;
  public text = '';
  public textX = '';
  public textY = '';
  public textWidth = '';
  public textHeight = '';
  public textPosition = ETextPosition.MiddleCenter;
  public textOffsetY = 0;
  public lineHeight = 22;

  public visible = true;
  public dragable = true;

  public font = '12px Microsoft YaHei';
  public fontColor = '#000';

  public pixelRatio = 1;

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

  public _mouseDown(e: MouseEvent) {
    __offsetWidth = e.x - this.x;
    __offsetHeight = e.y - this.y;
    __isMouseDown = true;
  }

  public mousemove(fn: any) {
    this.callback.mousemove = fn;
  }
  public _mousemove = (e: MouseEvent, node: any) => {
    
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




