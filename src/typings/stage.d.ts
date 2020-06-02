declare interface IStage extends TopoEvents {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;

  add: () => void;
  clear: () => void;
  print: () => void;
  toDataURL: () => string;
}