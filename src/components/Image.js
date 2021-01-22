import Element, {__drawRoundBoxPath} from './Element';
import {createImage} from '../utils/createEle'

export default class Image extends Element {
  constructor({
    style = {},
    props = {},
    idName = '',
    className = '',
    src
  }) {
    super({
      style,
      props,
      idName,
      className
    })
    this.type = 'Image'
    this.src = src
    const img = createImage()
    img.src = this.src
    this.__img = img
  }


  render(ctx) {
    this.ctx = ctx
    const img = this.__img

    return new Promise((resolve, reject) => {
      img.onload = () => {
        ctx.save()

        __drawRoundBoxPath.call(this);
        ctx.clip()
        const {x, y, width, height} = this.layoutBox
        ctx.drawImage(img, x, y, width, height)
        ctx.restore()

        resolve()
      }
      img.onerror = reject
    })
    
  }
}


