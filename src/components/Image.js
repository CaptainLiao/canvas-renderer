import Element from './Element';

export default class IImage extends Element {
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
      const img = new Image();
      img.src = this.src;
      img.onload = () => {
        ctx.save()

        const {x, y, width, height} = this.layoutBox
        ctx.drawImage(img, x, y, width, height);
        ctx.restore()

        resolve()
      }
      img.onerror = reject
    })
    

  }
}


