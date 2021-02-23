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
    if(__buildTarget__ === 'web') {
      img.setAttribute("crossOrigin",'Anonymous')
    }
    img.src = this.src // 提前请求
  }

  render(ctx) {
    this.ctx = ctx
    const img = createImage()
    if(__buildTarget__ === 'web') {
      img.setAttribute("crossOrigin",'Anonymous')
    }
    img.src = this.src // 这里不会重复请求
    
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


