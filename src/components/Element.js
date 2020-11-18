import {
  scalableStyles
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

const defaultStyle = {
  diplay: 'flex',
  flexDirection: 'row',
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
    this.style = {
      ...defaultStyle,
      ...style,
    };
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
    const ctx = this.ctx
    const style = this.style
    
    ctx.save();

    const box = this.layoutBox;
    const borderWidth = style.borderWidth || 0;
    const borderLeftWidth = style.borderLeftWidth === 0 ? 0 : borderWidth;
    const borderRightWidth = style.borderRightWidth === 0 ? 0 : borderWidth;
    const borderTopWidth = style.borderTopWidth === 0 ? 0 : borderWidth;
    const borderBottomWidth = style.borderBottomWidth === 0 ? 0 : borderWidth;
    const radius = style.borderRadius || 0;
    const borderColor = style.borderColor;
    const drawX = box.x;
    const drawY = box.y;

    if (borderWidth && borderColor) {
      ctx.setLineWidth(borderWidth)
      ctx.setStrokeStyle(borderColor)
    }

    const borderTopColor = style.borderTopColor

    if (borderTopWidth && borderTopColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderTopWidth)
        ctx.setStrokeStyle(borderTopColor)
  
        ctx.moveTo(
          radius ? drawX + radius : drawX,
          drawY + borderTopWidth / 2
        );
  
        ctx.lineTo(
          radius ? drawX + box.width - radius : drawX + box.width,
          drawY + borderTopWidth / 2
        );
        ctx.stroke()
      })
    }

    const borderBottomColor = style.borderBottomColor || borderColor
    if (borderBottomWidth && borderBottomColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderBottomWidth)
        ctx.setStrokeStyle(borderBottomColor)
  
        ctx.moveTo(
          radius ? drawX + radius : drawX,
          drawY + box.height - borderBottomWidth / 2
        );
  
        ctx.lineTo(
          radius ? drawX + box.width - radius : drawX + box.width,
          drawY + box.height - borderBottomWidth / 2
        )
        ctx.stroke()
      })
    }

    const borderLeftColor = style.borderLeftColor || borderColor
    if (borderLeftWidth && borderLeftColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderLeftWidth)
        ctx.setStrokeStyle(borderLeftColor)
  
        ctx.moveTo(
          drawX + borderLeftWidth / 2,
          radius ? drawY + radius : drawY,
        );
  
        ctx.lineTo(
          drawX + borderLeftWidth / 2,
          radius ? drawY + box.height - radius : drawY + box.height,
        )
        ctx.stroke()
      })
    }

    const borderRightColor = style.borderRightColor || borderColor
    if (borderRightWidth && borderRightColor) {
      __renderHelper.call(this, () => {
        ctx.setLineWidth(borderRightWidth)
        ctx.setStrokeStyle(borderRightColor)
  
        ctx.moveTo(
          drawX + box.width - borderRightWidth / 2,
          radius ? drawY + radius : drawY,
        );
  
        ctx.lineTo(
          drawX + box.width - borderRightWidth / 2,
          radius ? drawY + box.height - radius : drawY + box.height,
        )
        ctx.stroke()
      })
    }

    ctx.restore();
  }

  renderBackground() {
    if (this.style.backgroundColor) {
      const ctx = this.ctx
      
      ctx.save();
      ctx.beginPath();
      this.roundRectPath()

      this.ctx.setFillStyle(this.style.backgroundColor)

      ctx.closePath();
      
      ctx.fill();
      ctx.restore();
    }
  }
}

function __renderHelper(fn) {
  const ctx = this.ctx
  ctx.save();
  ctx.beginPath();
  
  fn(ctx)

  ctx.closePath();
  ctx.restore();
}