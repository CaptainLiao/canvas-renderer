import measureText from '../utils/measureText'
import Node from './Node';
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

  fontSize: '14px',
  fontFamily: `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFangSC",\
    "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "WenQuanYi Micro Hei", SimSun,sans-serif`,
  text: '',

  color: '#000',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  broderRadius: 0
}

export default class Text extends Element {
  constructor({
    style = {},
    _text_,
    idName = '',
    className = '',
  }) {
    super({
      style: {
        ...defaultTextStyle,
        ...style,
      },
      idName,
      className
    })
    this._text_ = _text_
    this.type = 'Text';
  }

  

  render(ctx) {
    this.ctx = ctx
    this.ctx.save()
    this.setFont(this.style)
    this.setFillStyle(this.style.color)
    this.ctx.fillText(this._text_, this.layoutBox.x, this.layoutBox.y + parseInt(this.style.fontSize))
    this.ctx.restore()
  }
}

  // constructor(textObj) {

    
  //   const textRect = measureText(this.textObj)
  //   this.textObj.width = textRect.width
  //   this.textObj.height = textRect.height

  //   // 内容盒子
  //   const contentBlock = {
  //     x: this.textObj.marginLeft,
  //     y: this.textObj.marginTop - this.textObj.paddingTop,

  //     width: textRect.width
  //       + this.textObj.paddingLeft
  //       + this.textObj.paddingRight
  //       + 2 * textRect.halfLineSpace,
  //     height: textRect.height
  //       + this.textObj.paddingTop
  //       + this.textObj.paddingBottom,
        
  //     borderColor: this.textObj.borderColor,
  //     borderWidth: this.textObj.borderWidth,
  //     backgroundColor: this.textObj.backgroundColor,
  //     broderRadius: this.textObj.broderRadius
  //   }

  //   new View(contentBlock)

  //   this.textObj.x = this.textObj.marginLeft
  //     + this.textObj.paddingLeft
  //     + textRect.halfLineSpace
  //   this.textObj.y = this.textObj.marginTop
  //     - textRect.halfLineSpace

  //   this.render()
  // }