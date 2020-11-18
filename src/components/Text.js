import measureText from '../utils/measureText'
import Element from './Element';

const defaultTextStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,

  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,

  fontSize: '12px',
  lineHeight: 14,
  fontFamily: `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFangSC",\
    "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "WenQuanYi Micro Hei", SimSun,sans-serif`,
  text: '',

  color: '#000',
  backgroundColor: '',
  borderColor: '#000',
  borderWidth: 0,
  borderRadius: 0
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

    super({
      style,
      idName,
      className
    })

    this.text = text
    this.type = 'Text';
  }

  render(ctx) {
    this.ctx = ctx

    ctx.save()

    this.renderBackground()
    this.renderBox()


    ctx.setFont(this.style)
    ctx.setFillStyle(this.style.color)
    ctx.fillText(this.text, this.layoutBox.x, this.layoutBox.y + parseInt(this.style.fontSize))

    ctx.restore()
  }

  _calcLine() {
    const { width: textWidth, height: textHeight } = this.layoutBox

    let { width: parentContentWidth } = this.parent.layoutBox
    const { width: parentWidth } = this.parent.styles

    // 如果一行宽度够，或者父级宽度是auto
    if ((parentContentWidth && parentContentWidth >= textWidth)) {
      this._lines = [{
        text: this.text,
        layoutBox: this.layoutBox
      }]
    } else {
      this._lines = []
      let lineIndex = 1
      let lineText = ''
      let _layout = null
      let lastLayout = null
      for (let i = 0; i < this.text.length; i++) {
        _layout = measureText({text: lineText + this.text[i], style: this.style})
        
        if (_layout.width > parentContentWidth) {
          // if (lineIndex >= this.renderStyles.maxLine) {
          //   // 最大行数限制 以及maxline省略号实现
          //   lineText = lineText.substring(0, lineText.length - 2) + '...'
          //   break
          // }
          // 超出了
          this._lines.push({
            text: lineText,
            layout: lastLayout
          })
          lineText = ''
          lineIndex += 1

        }

        lineText += this.text[i]

        lastLayout = _layout
      }
      this._layout.width = parentContentWidth
      this._lines.push({
        text: lineText,
        layout: measureText({text: lineText, style: this.style})
      })
      // 根据lineheihgt更新height
      this.layoutBox.height = this._lines.length * this.style.lineHeight
    }
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