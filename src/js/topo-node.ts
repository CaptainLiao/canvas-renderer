
import { ETextPosition } from '../const/index';
import { TopoTextNode } from './topo-node-text';
import { paint } from './utils/paint';

export class TopoNode extends TopoTextNode {
  public static install(ctor: any) {
    ctor.Node = TopoNode;
  }

  public width = 0;
  public height = 0;
  public borderRadius: number;
  public backgroundColor: string;
  public borderColor: string;
  public borderWidth: number;
  public borderStyle: string;

  public constructor(text: string) {
    super(text);
    this.text = text;
  }

  public setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public paint(ctx: any, node: any) {
    paint.rect(ctx, node);
    paint.text(ctx, node);
    console.log(node);
  }

}

