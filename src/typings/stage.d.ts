declare interface IStage extends TopoEvents {
  canvas: ICanvas;
  width: number;
  height: number;

  add: () => void;
  clear: () => void;
  print: () => void;
}