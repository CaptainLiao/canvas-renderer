  // 从左上角开始，顺时针画一个圆角路径
export function drawRoundBoxPath() {
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