export class Stage implements IStage {

  public static install(ctor: any) {
    ctor.Stage = Stage;
  }
  public canvas: ICanvas;
  public width: number;
  public height: number;

  public add: () => void;
  public clear: () => void;
  public print: () => void;

  public constructor(canvasEle: ICanvas) {
    this.canvas = canvasEle;
  }
}
