import measureText from './utils/measureText'
import Node from './Node';
import Block from './Block';

const defaultTextProps = {
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

export default class Text extends Node {
  constructor(textObj) {
    super()

    this.textObj = {
      ...defaultTextProps,
      ...textObj
    };
    
    const textRect = measureText(this.textObj)
    this.textObj.width = textRect.width
    this.textObj.height = textRect.height

    // 内容盒子
    const contentBlock = {
      x: this.textObj.marginLeft,
      y: this.textObj.marginTop - this.textObj.paddingTop,

      width: textRect.width
        + this.textObj.paddingLeft
        + this.textObj.paddingRight
        + 2 * textRect.halfLineSpace,
      height: textRect.height
        + this.textObj.paddingTop
        + this.textObj.paddingBottom,
        
      borderColor: this.textObj.borderColor,
      borderWidth: this.textObj.borderWidth,
      backgroundColor: this.textObj.backgroundColor,
      broderRadius: this.textObj.broderRadius
    }

    new Block(contentBlock)

    this.textObj.x = this.textObj.marginLeft
      + this.textObj.paddingLeft
      + textRect.halfLineSpace
    this.textObj.y = this.textObj.marginTop
      - textRect.halfLineSpace

    this.render()
  }
  render() {
    this.ctx.save()
    this.setFont(this.textObj)
    this.setFillStyle(this.textObj.color)
    this.ctx.fillText(this.textObj.text, this.textObj.x, this.textObj.y + this.textObj.height)
    this.ctx.restore()
  }
}