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

export function drawImage(ctx, node, img) {
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