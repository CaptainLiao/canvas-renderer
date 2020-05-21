import { ETextPosition } from '../const/index';
export class TopoNode implements ITopoNode {

  public static install(ctor: any) {
    ctor.Node = TopoNode;
  }
  public text = '';
  public x = 0;
  public y = 20;
  public visible = true;
  public font = '14px 微软雅黑';
  public fontColor = '#000';
  public textPosition = ETextPosition.BottomCenter;
  public textBaseline = 'alphabetic';

  public constructor(text: string) {
    this.text = text;
  }

  public setLocation(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public paint(ctx: any, node: any) {
    const {
      text,
      x,
      y,
      font,
      textBaseline
    } = node;

    ctx.font = font;
    ctx.textBaseline = textBaseline;
    ctx.fillText(text, x, y);
  }

}

