import { ETextPosition } from '../../const/index';

export const paint = {
  drawText: (ctx: any, node: any) => {
    const {
      text,
      font,
      width,
      fontColor
    } = node;

    if (!text) return;

    const {
      x,
      y,
      textBaseline
    } = __getTextPosition(ctx, node);

    ctx.font = font;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = fontColor;
    ctx.fillText(text, x, y, width);
  },

  // 绘制矩形块，对应 css block 块
  drawRect,

  drawImage: (ctx: CanvasRenderingContext2D, node: any) => {
    const {
      x,
      y,
      width,
      height
    } = node;

    return new Promise((resolve, reject) => {
      const bgImg = new Image();
      bgImg.src = node.image;
      bgImg.onload = () => {
        ctx.drawImage(bgImg, x, y, width, height);
        resolve();
      };

      bgImg.onerror = reject;
    });
  },

  drawNodeActive: (ctx: CanvasRenderingContext2D, node: any) => {
    const pad = 4;
    ctx.clearRect(node.x - pad, node.y - pad, node.width + 2*pad, node.height + 2*pad + node.lineHeight)

    if (!node.showSelected || !node.__isActive) return;

    ctx.save();

    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#5cd';
    ctx.fillRect( node.x - pad, node.y - pad, node.width + pad * 2, node.height + pad * 2)

    ctx.restore();
  }

};


function drawRect(ctx: CanvasRenderingContext2D, node: any) {
  const {
    x,
    y,
    width,
    height,
    borderRadius = 0,
    borderStyle,
    borderWidth = 1,
    borderColor = '#000000',
    backgroundColor = '#ffffff'
  } = node;
  let r = borderRadius;
  const w = width;
  const h = height;
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;

  ctx.save();
  if (borderStyle === 'dashed') {
    ctx.setLineDash([5, 5]);
  }

  // 圆角矩形
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();

  if (borderWidth) {
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }

  // 填充背景色
  ctx.fillStyle = backgroundColor;
  ctx.fill();

  ctx.restore();
}


function __getTextPosition(ctx: any, node: any) {
  const {
    x,
    y,
    width,
    height,
    font,
    text,
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

  ctx.font = font;
  const mtext = ctx.measureText(text); // TextMetrics object

  return {
    x: x + (width - mtext.width) / 2,
    y: yOffset + textOffsetY + 4,
    textBaseline
  };
}

