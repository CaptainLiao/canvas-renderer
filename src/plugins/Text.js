import {
  getTextWidth,
  getLineHeight,
  getTextWithEllipsis
} from '../utils/measureText'
import Element from '../Element';

const defaultTextStyle = {
  fontSize: '12px',
  fontWeight: 'normal',
  fontFamily: `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFangSC",\
    "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "WenQuanYi Micro Hei", SimSun,sans-serif`,
  text: '',
  textBaseline: 'top',
  color: '#000',
}

export default class Text extends Element {
  constructor({
    style = {},
    _text_,
    idName = '',
    className = '',
  }) {
    style = {
      ...defaultTextStyle,
      ...style
    }
    style.lineHeight = getLineHeight({style})

    super({
      style,
      idName,
      className
    })

    style = this.style
    let text = _text_
    if (style.width === undefined) {
      style.width = getTextWidth({
        text,
        style
      });
    } else if (style.textOverflow === 'ellipsis') {
      text = getTextWithEllipsis(style, text);
    }

    this.text = text
    this.__lines = []
    this.type = 'Text';
  }

  render(ctx) {
    this.ctx = ctx

    ctx.save()

    this.$renderBox()

    ctx.font = `${this.style.fontWeight} ${this.style.fontSize} ${this.style.fontFamily}`
    ctx.fillStyle = this.style.color
    ctx.textBaseline =this.style.textBaseline

    let startX = this.layoutBox.x + this.style.borderLeftWidth + this.style.paddingLeft
    let startY = this.layoutBox.y + this.style.borderTopWidth + this.style.paddingTop
    this.__lines.forEach((line, index) => {
      ctx.fillText(
        line.text, 
        startX,
        startY + index * parseFloat(this.style.lineHeight),
      )
    })


    ctx.restore()
  }
}
