import {
  defaultStyle,
  parseStyle
} from './style.js';

let uuid = 0;

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
  }) {
    this.id = ++uuid;
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

  renderBox() {
    const ctx = this.ctx
    if (this.style.backgroundColor) {
      ctx.save()
      __drawRoundBoxPath.call(this)
    
      ctx.fillStyle = this.style.backgroundColor
      ctx.fill()
      ctx.restore()
    }
    __renderBorder.call(this)
  }



}

function __renderHelper(fn) {
  const ctx = this.ctx
  ctx.save();
  fn(ctx)
  ctx.restore();
}

export function __drawRoundBoxPath() {
  // 从左上角开始，顺时针画一个路径
  const ctx = this.ctx
  const style = this.style
  
  ctx.save();
  ctx.beginPath();

  const box = this.layoutBox
  const borderLeftWidth = style.borderLeftWidth
  const borderRightWidth = style.borderRightWidth
  const borderTopWidth = style.borderTopWidth
  const borderBottomWidth = style.borderBottomWidth
  const drawX = box.x;
  const drawY = box.y;
  const ONE_CIRCLE = Math.PI * 2;

  let _x = drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2
  let _y = drawY + borderTopWidth / 2

  // borderTop
  ctx.arc(
    drawX + style.borderTopLeftRadius + borderLeftWidth/2, 
    _y + style.borderTopLeftRadius, 
    style.borderTopLeftRadius, 
    5/8 * ONE_CIRCLE, 
    3/4 * ONE_CIRCLE, 
    false
  )
  ctx.moveTo(drawX + style.borderTopLeftRadius + borderLeftWidth/2 , _y);
  ctx.arc(_x, _y + style.borderTopRightRadius, style.borderTopRightRadius, 3/4 * ONE_CIRCLE, 7/8 * ONE_CIRCLE, false);


  // borderRight
  ctx.arc(
    drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2, 
    drawY + borderTopWidth / 2 + style.borderTopRightRadius, 
    style.borderTopRightRadius, 7/8 * ONE_CIRCLE, 0, false);
  const borderBottomRightRadius = style.borderBottomRightRadius || style.borderRadius
  _x = drawX + box.width - borderRightWidth / 2
  _y = drawY + box.height - borderBottomRightRadius - borderBottomWidth / 2
  ctx.lineTo(_x, _y);
  ctx.arc(_x - borderBottomRightRadius, _y, borderBottomRightRadius, 0, 1/8 * ONE_CIRCLE, false);


  // borderBottom
  ctx.arc(_x - style.borderBottomRightRadius, _y, style.borderBottomRightRadius, 1/8 * ONE_CIRCLE, 1/4* ONE_CIRCLE,false);
  const borderBottomLeftRadius = style.borderBottomLeftRadius || style.borderRadius
  _x = drawX + borderBottomLeftRadius + borderLeftWidth / 2
  _y = drawY + box.height - borderBottomWidth / 2
  ctx.lineTo(_x, _y);
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 1/4 *ONE_CIRCLE, 3/8* ONE_CIRCLE, false);

  // borderLeft
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 3/8 *ONE_CIRCLE, 1/2* ONE_CIRCLE, false);
  const borderTopLeftRadius = style.borderTopLeftRadius || style.borderRadius
  _x =  drawX + borderLeftWidth / 2
  _y = drawY + borderTopLeftRadius + borderTopWidth / 2
  ctx.lineTo(_x, drawY + box.height - style.borderBottomLeftRadius - style.borderBottom)
  // 上左圆角
  ctx.arc(_x + borderTopLeftRadius, _y, borderTopLeftRadius, 1/2* ONE_CIRCLE, 5/8 * ONE_CIRCLE, false)

  ctx.restore();
}

function __renderBorder() {
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
  const drawX = box.x;
  const drawY = box.y;
  const ONE_CIRCLE = Math.PI * 2;

  let _x = drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2
  let _y = drawY + borderTopWidth / 2

  // borderTop
  ctx.arc(
    drawX + style.borderTopLeftRadius + borderLeftWidth/2, 
    _y + style.borderTopLeftRadius, 
    style.borderTopLeftRadius, 
    5/8 * ONE_CIRCLE, 
    3/4 * ONE_CIRCLE, 
    false
  )
  //ctx.moveTo(drawX + style.borderTopLeftRadius + borderLeftWidth/2 , _y);
  ctx.arc(_x, _y + style.borderTopRightRadius, style.borderTopRightRadius, 3/4 * ONE_CIRCLE, 7/8 * ONE_CIRCLE, false);

  const borderTopColor = style.borderTopColor
  if (borderTopWidth && borderTopColor) {
    __renderHelper.call(this, (ctx) => {
      ctx.lineWidth = borderTopWidth
      ctx.strokeStyle = borderTopColor
      ctx.stroke()
    })
  }


  // borderRight
  ctx.beginPath()
  ctx.arc(
    drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2, 
    drawY + borderTopWidth / 2 + style.borderTopRightRadius, 
    style.borderTopRightRadius, 7/8 * ONE_CIRCLE, 0, false);
  const borderBottomRightRadius = style.borderBottomRightRadius || style.borderRadius
  _x = drawX + box.width - borderRightWidth / 2
  _y = drawY + box.height - borderBottomRightRadius - borderBottomWidth / 2
  //ctx.lineTo(_x, _y);
  ctx.arc(_x - borderBottomRightRadius, _y, borderBottomRightRadius, 0, 1/8 * ONE_CIRCLE, false);

  const borderRightColor = style.borderRightColor
  if (borderRightWidth && borderRightColor) {
    __renderHelper.call(this, () => {
      ctx.lineWidth = borderRightWidth
      ctx.strokeStyle = borderRightColor
      ctx.stroke()
    })
  }


  // borderBottom
  ctx.beginPath()
  ctx.arc(_x - style.borderBottomRightRadius, _y, style.borderBottomRightRadius, 1/8 * ONE_CIRCLE, 1/4* ONE_CIRCLE,false);
  const borderBottomLeftRadius = style.borderBottomLeftRadius || style.borderRadius
  _x = drawX + borderBottomLeftRadius + borderLeftWidth / 2
  _y = drawY + box.height - borderBottomWidth / 2
  //ctx.lineTo(_x, _y);
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 1/4 *ONE_CIRCLE, 3/8* ONE_CIRCLE, false);
  const borderBottomColor = style.borderBottomColor
  if (borderBottomWidth && borderBottomColor) {
    __renderHelper.call(this, () => {
      ctx.lineWidth = borderBottomWidth
      ctx.strokeStyle = borderBottomColor
      ctx.stroke()
    })
  }

  // borderLeft
  ctx.beginPath()
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 3/8 *ONE_CIRCLE, 1/2* ONE_CIRCLE, false);
  const borderTopLeftRadius = style.borderTopLeftRadius || style.borderRadius
  _x =  drawX + borderLeftWidth / 2
  _y = drawY + borderTopLeftRadius + borderTopWidth / 2
  //ctx.lineTo(_x, drawY + box.height - style.borderBottomLeftRadius - style.borderBottom)
  // 上左圆角
  ctx.arc(_x + borderTopLeftRadius, _y, borderTopLeftRadius, 1/2* ONE_CIRCLE, 5/8 * ONE_CIRCLE, false)
  const borderLeftColor = style.borderLeftColor
  if (borderLeftWidth && borderLeftColor) {
    __renderHelper.call(this, () => {
      ctx.lineWidth = borderLeftWidth
      ctx.strokeStyle = borderLeftColor
      ctx.stroke()
    })
  }

  ctx.restore();
}