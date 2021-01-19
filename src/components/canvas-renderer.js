export default function (ctx){
  const tmpt = {
    setFont(fontObj) {
      const t = fontObj
      ctx.font = `${t.fontSize} ${t.fontFamily}`
      
    },
    setTextBaseline(textBaseline) {
      ctx.textBaseline = textBaseline
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

  Object.keys(tmpt)
    .map(k => {
      if (!ctx[k]) ctx[k] = tmpt[k]
    })
}