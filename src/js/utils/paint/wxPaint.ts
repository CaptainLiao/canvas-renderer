import { getTextPosition } from '../index'

const IMAGE_LIST: any = []
const PAD = 4;

export const wxPaint = {
  // canvas 无法准确的测量文本高度，所以需要指定行高 line-height
  // 对于单行文本来说，行高就是最小高度
  drawText: (ctx: any, node: any) => {
    const {
      text,
      font,
      width,
      fontColor,
      textBaseline
    } = node;

    if (!text) return;

    const { textX, textY } = getTextPosition(node)
    node.textX = textX;
    node.textY = textY;

    ctx.font = font;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = fontColor;
    ctx.fillText(text, textX, textY, width);
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
      const img = IMAGE_LIST.find((item: any) => item.src === node.image)
      if (img) {
        ctx.drawImage(img, x, y, width, height);
        return resolve();
      }
 
      const bgImg = new Image();
      bgImg.src = node.image;
      
      bgImg.onload = () => {
        IMAGE_LIST.push(bgImg);
        ctx.drawImage(bgImg, x, y, width, height);
        resolve();
      };
      bgImg.onerror = reject;
      
    });
  },

  drawNodeActive: (ctx: CanvasRenderingContext2D, node: any) => {
    if (!node.showSelected || !node.__isActive) return;

    ctx.save();

    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#5cd';
    ctx.fillRect( node.x - PAD, node.y - PAD, node.width + 2*PAD, node.height + 2*PAD)

    ctx.restore();
  },
  
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




