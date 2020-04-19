declare interface TopoEvents {
  addEvenListener?: (eventName: string, eventHandler: () => void) => void;
  removeEventListener?: (eventName?: string) => void;
  click?: (eventHandler: () => void) => void;
  dbclick?: (eventHandler: () => void) => void;
  mousedown?: (eventHandler: () => void) => void;
  mouseup?: (eventHandler: () => void) => void;
  mouseover?: (eventHandler: () => void) => void;
  mouseout?: (eventHandler: () => void) => void;
  mousemove?: (eventHandler: () => void) => void;
  mousedrag?: (eventHandler: () => void) => void;
  mousewheel?: (eventHandler: () => void) => void;
}