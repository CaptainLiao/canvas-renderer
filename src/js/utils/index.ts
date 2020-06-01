

import {wxPaint} from './paint/wxPaint'
import {webPaint} from './paint/webPaint'
import {getTextPosition} from './paint/util'

let isWxMiniprograme = false;
try {
  isWxMiniprograme = !!(wx && wx.scanCode)
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

export {getTextPosition}

