import { ETextPosition } from '../const/index';
export class TopoNode implements ITopoNode {
  text = '';
  x = 0;
  y = 20;
  visible = true;
  font = '14px 微软雅黑';
  fontColor = '#000';
  textPosition = ETextPosition.BottomCenter;
  textBaseline = 'alphabetic';

  static install(ctor: any) {
    ctor.Node = TopoNode;
  }

  constructor(text: string) {
    this.text = text;
  }


  setLocation(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
}

