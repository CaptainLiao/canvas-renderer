
import Element from '../Element';

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
    
    ctx.save()
    this.renderBox()

    ctx.restore()
  }
}

