import {
  defaultStyle,
  parseStyle
} from './style.js';

let uuid = 0;
let dpr = 1;

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getRgba(hex, opacity) {
  let rgbObj = hexToRgb(hex);

  if (opacity == undefined) {
    opacity = 1;
  }

  return `rgba(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b}, ${opacity})`;
}

export default class Element{
  constructor({
    style = {},
    props = {},
    idName = '',
    className = '',
    id = ++uuid,
  }) {
    this.id = id;
    this.style = parseStyle({
      ...defaultStyle,
      ...style,
    });
    this.props = props;
    this.idName = idName;
    this.className = className;
    
    this.children = [];
    this.parent = null;
    this.parentId = 0;

    this.root = null;
    this.isDestroyed = false;
    this.layoutBox = {};

    if (style.opacity !== undefined && style.color && style.color.indexOf('#') > -1) {
      style.color = getRgba(style.color, style.opacity);
    }

    if (style.opacity !== undefined && style.backgroundColor && style.backgroundColor.indexOf('#') > -1) {
      style.backgroundColor = getRgba(style.backgroundColor, style.opacity);
    }

    // for (let key in this.style) {
    //   if (scalableStyles.indexOf(key) > -1) {
    //     this.style[key] *= dpr;
    //   }
    // }

    // this.initRepaint();
  }

  // 子类填充实现
  repaint() {}

  render() {}

  checkNeedRender() {
    return true;
  }

  // 子类填充实现
  destroy() {

  }

  add(element) {
    element.parent = this;
    element.parentId = this.id;

    this.children.push(element)
  }

  // 方便子类实现borderRadius
  roundRectPath() {
    const ctx = this.ctx
    const style = this.style
    const box = this.layoutBox

    const w = box.width
    const h = box.height
    const r = style.borderRadius
    const x = box.x
    const y = box.y

    ctx.moveTo(x + r, y)

    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)

    ctx.clip()
  }

  renderBox() {
    // 从左上角开始，顺时针画一个盒子
    const ctx = this.ctx
    const style = this.style
    
    ctx.save();
    ctx.beginPath();

    const box = this.layoutBox
    const borderLeftWidth = style.borderLeftWidth
    const borderRightWidth = style.borderRightWidth
    const borderTopWidth = style.borderTopWidth
    const borderBottomWidth = style.borderBottomWidth
    const borderColor = style.borderColor
    const drawX = box.x;
    const drawY = box.y;

    const borderTopRightRadius = style.borderTopRightRadius
    let _x = drawX + box.width - borderTopRightRadius
    let _y = drawY + borderTopWidth / 2
    ctx.moveTo(drawX + (style.borderTopLeftRadius), _y);
    ctx.lineTo(_x, _y);
    // 上右圆角
    ctx.arc(_x, _y + borderTopRightRadius, borderTopRightRadius, 3/2 * Math.PI, 0, false);
    const borderTopColor = style.borderTopColor || borderColor
    if (borderTopWidth && borderTopColor) {
      __renderHelper.call(this, (ctx) => {
        ctx.setLineWidth(borderTopWidth)
        ctx.setStrokeStyle(borderTopColor)
        ctx.stroke()
      })
    }

    const borderBottomRightRadius = style.borderBottomRightRadius
    _x = drawX + box.width
    _y = drawY + box.height - borderBottomRightRadius - borderRightWidth / 2
    ctx.lineTo(_x, _y);
    // 下右圆角
    ctx.arc(_x - borderBottomRightRadius, _y, borderBottomRightRadius, 0, 1/2 * Math.PI, false);
    const borderRightColor = style.borderRightColor || borderColor
    if (borderRightWidth && borderRightColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderRightWidth)
        ctx.setStrokeStyle(borderRightColor)
        ctx.stroke()
      })
    }
          
    const borderBottomLeftRadius = style.borderBottomLeftRadius
    _x = drawX + borderBottomLeftRadius + borderLeftWidth / 2
    _y = drawY + box.height - borderBottomWidth / 2
    ctx.lineTo(_x, _y);
    // 下左圆角
    ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 1/2 * Math.PI, Math.PI, false);
    const borderBottomColor = style.borderBottomColor || borderColor
    if (borderBottomWidth && borderBottomColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderBottomWidth)
        ctx.setStrokeStyle(borderBottomColor)
        ctx.stroke()
      })
    }
      
    const borderTopLeftRadius = style.borderTopLeftRadius
    _x =  drawX + borderLeftWidth / 2
    _y = drawY + borderTopLeftRadius + borderTopWidth / 2
    ctx.lineTo(_x, drawY + box.height - (style.borderBottomLeftRadius))
    // 上左圆角
    ctx.arc(_x + borderTopLeftRadius, _y, borderTopLeftRadius, Math.PI, 1.5 * Math.PI, false)
    const borderLeftColor = style.borderLeftColor || borderColor
    if (borderLeftWidth && borderLeftColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderLeftWidth)
        ctx.setStrokeStyle(borderLeftColor)
        ctx.stroke()
      })
    }

    if (this.style.backgroundColor) {
      ctx.setFillStyle(this.style.backgroundColor)
      ctx.fill()
    }
    ctx.restore();
  }
}

function __renderHelper(fn) {
  const ctx = this.ctx
  ctx.save();
  fn(ctx)
  ctx.restore();
}