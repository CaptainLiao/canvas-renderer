import Element, {__drawRoundBoxPath} from './Element';
import {CanvasImage} from '../utils'

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
    this.type = 'Image';
    this.src = src;
  }


  render(ctx) {
    this.ctx = ctx;

    return new Promise((resolve, reject) => {
      const img = new CanvasImage();
      img.src = this.src;
      img.onload = () => {
        ctx.save();

        __drawRoundBoxPath.call(this);
        ctx.clip();
        const {x, y, width, height} = this.layoutBox;
        ctx.drawImage(img, x, y, width, height);
        ctx.restore()

        resolve()
      }
      img.onerror = reject
    })
    

  }
}


