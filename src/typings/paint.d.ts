declare interface IPainter {
  drawText(ctx: any, node: any): void;
  drawRect(ctx: any, node: any): void;
  drawImage(ctx: any, node: any): void;
  drawNodeActive(ctx: any, node: any): void;
}