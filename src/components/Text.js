import measureText from '../utils/measureText'
import Element from './Element';

const defaultTextStyle = {
  fontSize: '12px',
  lineHeight: 12*1.2 + 'px',
  fontFamily: `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFangSC",\
    "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "WenQuanYi Micro Hei", SimSun,sans-serif`,
  text: '',
  textBaseline: 'top',
  color: '#000',
}

let context = null;


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

    super({
      style,
      idName,
      className
    })

    style = this.style
    let text = _text_
    if (style.width === undefined) {
      const r = measureText({
        text,
        style
      })
      
      style.width = r.width;
      style.height = r.height;
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

    this.renderBox()


    ctx.setFont(this.style)
    ctx.setFillStyle(this.style.color)
    ctx.setTextBaseline(this.style.textBaseline)

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

// helper
function createCanvas() {
  if (typeof wx !== "undefined") {
    return wx.createCanvas();
  } else {
    return document.createElement('canvas');
  }
}

function getContext() {
  if (context) {
    return context;
  }

  const canvas = createCanvas();
  canvas.width = 1
  canvas.height = 1
  context = canvas.getContext('2d');

  return context;
}


function getTextWidth(style, value) {
  const context = getContext();

  context.font = `${style.fontWeight || 'normal'} ${style.fontSize || '12px'} ${style.fontFamily || DEFAULT_FONT_FAMILY}`;

  return context.measureText(value).width || 0;
}

function getTextWithEllipsis(style, text) {
  const value = String(text);

  let maxWidth = style.width;
  const wordWidth = measureText({
    style,
    text
  }).width;

  // 对文字溢出的处理，默认用...
  const textOverflow = style.textOverflow || 'ellipsis';

  // 文字最大长度不超限制
  if (wordWidth <= maxWidth) {
    return value;
  }

  // 对于用点点点处理的情况，先将最大宽度减去...的宽度
  if (textOverflow === 'ellipsis') {
    maxWidth -= getTextWidth(style, '...');
  }

  let length = value.length - 1;
  let str = value.substring(0, length);

  while (getTextWidth(style, str) > maxWidth && length > 0) {
    length--;
    str = value.substring(0, length);
  }

  return (length && textOverflow === 'ellipsis' ?
    str + '...' :
    str);
}