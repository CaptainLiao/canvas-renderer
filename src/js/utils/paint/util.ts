import { ETextPosition } from '../../../const/index';

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