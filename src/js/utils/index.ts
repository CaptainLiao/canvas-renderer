

import { ETextPosition } from '../../const/index';
import {wxPaint} from './paint/wxPaint'
import {webPaint} from './paint/webPaint'

let isWxMiniprograme = false;
try {
  isWxMiniprograme = wx && wx.miniProgram
} catch (e) {
  // ignore
}
export const paint = isWxMiniprograme ? wxPaint : webPaint;

export function measureTextWidth(ctx: CanvasRenderingContext2D, node: any) {
  ctx.font = node.font;
  return ctx.measureText(node.text).width;
}

export function getPoint(point: Points, canvasRect: BoundingRect): Points {
  return {
    x: point.x - canvasRect.left,
    y: point.y - canvasRect.top,
  }
}

export function getTextPosition(node: any) {
  const {
    x,
    y,
    width,
    height,
    textOffsetY,
    textPosition
  } = node;

  let yOffset = y;
  let textBaseline = '';
  switch (textPosition) {
    case ETextPosition.BottomCenter:
      yOffset = y + height + 2;
      textBaseline = 'top';
      break;
    case ETextPosition.TopCenter:
      yOffset = y;
      textBaseline = 'bottom';
      break;
    default:
      yOffset = y + height / 2;
      textBaseline = 'middle';
      break;
  }

  return {
    textX: x + (width - node.textWidth) / 2,
    textY: yOffset + textOffsetY,
    textBaseline
  };
}