
import { ETextPosition } from '../const/index';
import { TopoTextNode } from './topo-node-text';
import { paint } from './utils/paint';

export class TopoNode extends TopoTextNode {
  public static install(ctor: any) {
    ctor.Node = TopoNode;
  }

  public width = 0;
  public height = 0;
  public lineHeight = 22;
  public borderRadius: number;
  public backgroundColor: string;
  public borderColor: string;
  public borderWidth: number;
  public borderStyle: string;
  public image: string;

  public constructor(text: string) {
    super(text);
    this.text = text;
  }

  public setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public setImage(image: string) {
    this.image = image;
  }

  public paint(ctx: CanvasRenderingContext2D, node: any) {
    ctx.font = node.font;
    const mtext = ctx.measureText(node.text); // TextMetrics object

    node.width = node.width || mtext.width;
    node.height = node.height || node.lineHeight;

    if (node.image) {
      return paint.drawImage(ctx, node)
        .then(() => {
          paint.text(ctx, node);
        });
    }

    paint.rect(ctx, node);
    console.log(node);
  }

}

