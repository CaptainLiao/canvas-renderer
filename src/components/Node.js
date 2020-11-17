export default class Node {
  constructor() {
    this.children = []
  }
  add(node) {
    this.children.push(node)
  }
  setFont(fontObj) {
    const t = fontObj
    this.ctx.font = `${t.fontSize} ${t.fontFamily}`
    
  }
  setFillStyle(fillStyle) {
    this.ctx.fillStyle = fillStyle
  }
  setStrokeStyle(strokeStyle) {
    this.ctx.strokeStyle = strokeStyle
  }
  setLineWidth(lineWidth) {
    this.ctx.lineWidth = lineWidth
  }
}