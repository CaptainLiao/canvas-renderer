import Node from './Node';

export default class Line extends Node {
  constructor(lineObj) {
    super()
    this.lineObj = lineObj
  }
  render() {
    this.ctx.save()

    this.drawPath()

    this.setStrokeStyle(this.lineObj.color)
    this.setLineWidth(this.lineObj.lineWidth)

    this.ctx.stroke()

    this.ctx.restore()
  }
  drawPath() {
    const {
      startPoint,
      endPoint,
    } = this.lineObj
    this.ctx.beginPath();
    this.ctx.moveTo(startPoint[0], startPoint[1]);
    this.ctx.lineTo(endPoint[0], endPoint[1]);
  }
}
