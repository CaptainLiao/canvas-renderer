import {
  drawRoundRectPath
} from './utils/path'
import Node from './Node';

export default class Block extends Node {
  constructor(blockObj) {
    super()
    this.blockObj = blockObj

    this.render()
  }
  render() {
    const radius = this.blockObj.broderRadius || 0

    //圆的直径必然要小于矩形的宽高		
    if(2*radius>this.blockObj.width || 2*radius>this.blockObj.height) return console.error('圆的直径必然要大于矩形的宽高')

    this.ctx.save()
    this.ctx.translate(this.blockObj.x, this.blockObj.y)
    this.setLineWidth(this.blockObj.borderWidth)

    //绘制圆角矩形的各个边
    drawRoundRectPath(this.ctx, this.blockObj.width, this.blockObj.height, radius)
    
    if (this.blockObj.borderColor) {
      this.setStrokeStyle(this.blockObj.borderColor)
      this.ctx.stroke();
    }

    if (this.blockObj.backgroundColor) {
      this.setFillStyle(this.blockObj.backgroundColor)
      this.ctx.fill()
    }

    this.ctx.restore()
  }
}
