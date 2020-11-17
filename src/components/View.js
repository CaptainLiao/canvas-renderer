import {
  drawRoundRectPath
} from '../utils/path'
import Element from './Element';

export default class View extends Element {
  constructor({
    style = {},
    props = {},
    idName = '',
    className = '',
  }) {
    super({
      style,
      props,
      idName,
      className
    })
    this.type = 'View';
  }


  render(ctx) {
    this.ctx = ctx;
    const radius = this.style.borderRadius || 0

    //圆的直径必然要小于矩形的宽高		
    if(2*radius>this.layoutBox.width || 2*radius>this.layoutBox.height) return console.error('圆的直径必然要大于矩形的宽高')

    this.ctx.save()
    this.ctx.translate(this.layoutBox.x, this.layoutBox.y)
    this.setLineWidth(this.style.borderWidth)

    //绘制圆角矩形的各个边
    drawRoundRectPath(this.ctx, this.layoutBox.width, this.layoutBox.height, radius)
    
    if (this.style.borderColor) {
      this.setStrokeStyle(this.style.borderColor)
      this.ctx.stroke();
    }

    if (this.style.backgroundColor) {
      this.setFillStyle(this.style.backgroundColor)
      this.ctx.fill()
    }

    this.ctx.restore()
  }
}

