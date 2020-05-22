import { ETextPosition } from '../const/index';
import { paint } from './utils/paint';

export class TopoTextNode implements ITopoNode {
  public static install(ctor: any) {
    ctor.TextNode = TopoTextNode;
  }
  public text = '';
  public x = 0;
  public y = 0;
  public visible = true;
  public font = '14px 微软雅黑';
  public fontColor = '#000';
  public textPosition = ETextPosition.MiddleCenter;

  public constructor(text: string) {
    this.text = text;
  }

  public setLocation(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public paint(ctx: any, node: any) {
    paint.text(ctx, node);
  }

}

