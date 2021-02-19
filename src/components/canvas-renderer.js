export default function (ctx){
  const tmpt = {
    setFont(fontObj, text) {
      const t = fontObj
      if (__buildTarget__ === 'mp') {
        // 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.font 代替
        ctx.setFontSize && ctx.setFontSize(parseFloat(t.fontSize))
        ctx.font = `${t.fontWeight} ${t.fontSize} ${t.fontFamily}`
      }
      ctx.font = `${t.fontWeight} ${t.fontSize} ${t.fontFamily}`
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