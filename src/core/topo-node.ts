
import { ETextPosition } from './const/index';
import { TopoTextNode } from './topo-node-text';
import { paint } from './utils/index';

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

  private __lastActive: boolean;

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

  public paint(ctx: CanvasRenderingContext2D) {
    paint.drawNodeActive(ctx, this);

    if (this.image) {
      paint.drawText(ctx, this);
      return paint.drawImage(ctx, this)
    }

    paint.drawRect(ctx, this);
    paint.drawText(ctx, this);
  }


}

