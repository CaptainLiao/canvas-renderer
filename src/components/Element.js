import {
  scalableStyles
} from './style.js';

import Node from './Node';

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

export default class Element extends Node{
  constructor({
    style = {},
    props = {},
    idName = '',
    className = '',
    id = ++uuid,
  }) {
    this.children = [];
    this.parent = null;
    this.parentId = 0;
    this.id = id;
    this.props = props;
    this.idName = idName;
    this.className = className;
    this.style = style;

    this.root = null;
    this.isDestroyed = false;
    this.layoutBox = {};

    if (style.opacity !== undefined && style.color && style.color.indexOf('#') > -1) {
      style.color = getRgba(style.color, style.opacity);
    }

    if (style.opacity !== undefined && style.backgroundColor && style.backgroundColor.indexOf('#') > -1) {
      style.backgroundColor = getRgba(style.backgroundColor, style.opacity);
    }

    for (let key in this.style) {
      if (scalableStyles.indexOf(key) > -1) {
        this.style[key] *= dpr;
      }
    }

    this.initRepaint();
  }

  // 子类填充实现
  repaint() {}

  // 子类填充实现
  insert() {}

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
  roundRectPath(ctx, layoutBox) {
    const style = this.style
    const box = layoutBox || this.layoutBox

    const w = box.width
    const h = box.height
    const r = style.borderRadius
    const x = box.absoluteX
    const y = box.absoluteY

    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)

    ctx.clip()
  }

  renderBorder(ctx, layoutBox) {
    const style = this.style

    if (style.borderRadius) {
      this.roundRectPath(ctx, layoutBox);
    }

    ctx.save();

    const box = layoutBox || this.layoutBox;
    const borderWidth = style.borderWidth || 0;
    const borderLeftWidth = style.borderLeftWidth || 0;
    const borderRightWidth = style.borderRightWidth || 0;
    const borderTopWidth = style.borderTopWidth || 0;
    const borderBottomWidth = style.borderBottomWidth || 0;
    const radius = style.borderRadius || 0;
    const borderColor = style.borderColor;
    const drawX = box.absoluteX;
    const drawY = box.absoluteY;

    ctx.beginPath();

    if (borderWidth && borderColor) {
      ctx.setLineWidth(borderWidth)
      ctx.setStrokeStyle(borderColor)
      ctx.strokeRect(drawX, drawY, box.width, box.height)
    }

    if (borderTopWidth && (borderColor || style.borderTopColor)) {
      ctx.setLineWidth(borderTopWidth)
      ctx.setStrokeStyle(style.borderTopColor || borderColor)

      ctx.moveTo(
        radius ? drawX + radius : drawX,
        drawY + borderTopWidth / 2
      );

      ctx.lineTo(
        radius ? drawX + box.width - radius : drawX + box.width,
        drawY + borderTopWidth / 2
      );
    }

    if (borderBottomWidth && (borderColor || style.borderBottomColor)) {
      ctx.lineWidth = borderBottomWidth;
      ctx.strokeStyle = style.borderBottomColor || borderColor;

      ctx.moveTo(
        radius ? drawX + radius : drawX,
        drawY + box.height - borderBottomWidth / 2
      );

      ctx.lineTo(
        radius ? drawX + box.width - radius : drawX + box.width,
        drawY + box.height - borderBottomWidth / 2
      )
    }

    if (borderLeftWidth && (borderColor || style.borderLeftColor)) {
      ctx.lineWidth = borderLeftWidth;
      ctx.strokeStyle = style.borderLeftColor || borderColor;

      ctx.moveTo(
        drawX + borderLeftWidth / 2,
        radius ? drawY + radius : drawY,
      );

      ctx.lineTo(
        drawX + borderLeftWidth / 2,
        radius ? drawY + box.height - radius : drawY + box.height,
      )
    }

    if (borderRightWidth && (borderColor || style.borderRightColor)) {
      ctx.lineWidth = borderRightWidth;
      ctx.strokeStyle = style.borderRightColor || borderColor;

      ctx.moveTo(
        drawX + box.width - borderRightWidth / 2,
        radius ? drawY + radius : drawY,
      );

      ctx.lineTo(
        drawX + box.width - borderRightWidth / 2,
        radius ? drawY + box.height - radius : drawY + box.height,
      )
    }

    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }
}