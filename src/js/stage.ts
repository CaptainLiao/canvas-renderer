export class Stage implements IStage {
  canvas: ICanvas;
  width: number;
  height: number;

  constructor(canvasEle: ICanvas) {
    this.canvas = canvasEle;
  }

  static install(ctor: any) {
    ctor.Stage = Stage;
  }

  add: () => void;
  clear: () => void;
  print: () => void;
}