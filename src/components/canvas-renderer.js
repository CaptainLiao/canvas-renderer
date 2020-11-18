export default function (ctx){
  const tmpt = {
    setFont(fontObj) {
      const t = fontObj
      ctx.font = `${t.fontSize} ${t.fontFamily}`
      
    },
    setFillStyle(fillStyle) {
      ctx.fillStyle = fillStyle
    },
    setStrokeStyle(strokeStyle) {
      ctx.strokeStyle = strokeStyle
    },
    setLineWidth(lineWidth) {
      ctx.lineWidth = lineWidth
    }
  }

  Object.assign(ctx, tmpt)
}