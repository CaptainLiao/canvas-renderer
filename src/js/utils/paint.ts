import { ETextPosition } from '../../const/index';

export const paint = {
  text: (ctx: any, node: any) => {
    const {
      text,
      font,
      fontColor
    } = node;
    const {
      x,
      y,
      textBaseline
    } = __getTextPosition(ctx, node);

    ctx.font = font;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = fontColor;
    ctx.fillText(text, x, y);
  },

  // 绘制矩形块，对应 css block 块
  rect

 };

 function rect(ctx: any, node: any) {
  const {x, y, width, height, borderRadius} = node;
  let r = borderRadius || 0;
  const w = width;
  const h = height;
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.stroke();
}


function __getTextPosition(ctx: any, node: any) {
  const mtext = ctx.measureText(node.text); // TextMetrics object
  const {
    x,
    y,
    width,
    height,
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
    case ETextPosition.MiddleCenter:
      yOffset = y + height / 2;
      textBaseline = 'middle';
      break;
    default:
      break;
  }

  return {
    x: x + (width - mtext.width) / 2 - 6,
    y: yOffset,
    textBaseline
  };
}

