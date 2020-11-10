import { ETextPosition } from '../../const';

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
      yOffset = y + height / 2 + 2;
      textBaseline = 'middle';
      break;
  }

  return {
    textX: x + (width - node.textWidth) / 2,
    textY: yOffset + textOffsetY,
    textBaseline
  };
}

export function drawImage2(ctx, node, img) {
  const {
    x,
    y,
    width,
    height,
    pixelRatio
  } = node;

  ctx.save()
  ctx.scale(1/pixelRatio, 1/pixelRatio)
  ctx.drawImage(img, x, y, width, height);
  ctx.restore();
}

export function drawImage(ctx: CanvasRenderingContext2D, node: any) {
  const {
    x,
    y,
    width,
    height,
    image,
    pixelRatio
  } = node;

  ctx.save();
  drawRectPath(ctx, node);
  ctx.drawImage(image, 0, 0, image.width, image.height, x, y, width, height);
  ctx.restore();
}


function drawRectPath(ctx: CanvasRenderingContext2D, node: any) {
  const {
    x,
    y,
    width,
    height,
    borderRadius = 0,
  } = node;
  let r = borderRadius;
  const w = width;
  const h = height;
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;

  // 矩形路径(可带圆角)
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}