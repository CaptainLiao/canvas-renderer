export class Stage implements IStage {

  public static install(ctor: any) {
    ctor.Stage = Stage;
  }
  public canvas: any;
  public width: number;
  public height: number;

  public add: () => void;
  public clear: () => void;
  public print: () => void;

  public toDataURL(type?: string, encoderOptions?: number){
    
    if (this.canvas.toDataURL) return this.canvas.toDataURL(type, encoderOptions)

    // const {
    //   _top,
    //   _left,
    //   _width,
    //   _height,
    // } = this.canvas
    // wx.canvasToTempFilePath({
    //   x: _top,
    //   y: _left,
    //   width: _width,
    //   height: _height,
    //   destWidth: _width,
    //   destHeight: _height,
    //   canvasId: 'canvas',
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  }

  public constructor(canvasEle: HTMLCanvasElement) {
    this.canvas = canvasEle;
  }
}
