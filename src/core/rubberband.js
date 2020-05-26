export function rubberband(ctx) {
  const canvas = ctx.canvas
  const eraseAllButton = document.getElementById('eraseAllButton')
  let drawingSurfaceImageData
  const mousedown = {}
  const rubberbandRect = {}
  let dragging = false
  let guidewires = true

  function windowToCanvas(x, y) {
    const canvas = ctx.canvas
    const bbox = canvas.getBoundingClientRect()
    return {
      x: x - bbox.left * (canvas.width / bbox.width),
      y: y - bbox.top * (canvas.height / bbox.height)
    }
  }

  function saveDrawingSurface() {
    drawingSurfaceImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  }
  function restoreDrawingSurface() {
    ctx.putImageData(drawingSurfaceImageData, 0, 0);
  }

  function updateRubberBandRectangle(loc) {
    rubberbandRect.width = Math.abs(loc.x - mousedown.x)
    rubberbandRect.height = Math.abs(loc.y - mousedown.y)
    rubberbandRect.left = loc.x > mousedown.x ? mousedown.x : loc.x
    rubberbandRect.top = loc.y > mousedown.y ? mousedown.y : loc.y
  }
  function drawRubberbandShape(loc) {
    ctx.beginPath()
    ctx.moveTo(mousedown.x, mousedown.y)
    ctx.lineTo(loc.x, loc.y)
    ctx.stroke()
  }
  function updateRubberband(loc) {
    updateRubberBandRectangle(loc)
    drawRubberbandShape(loc)
  }

  // Guidewires
  function drawHorizontalLine(y) {
    ctx.beginPath()
    ctx.moveTo(0, y + 0.5)
    ctx.lineTo(canvas.width, y + 0.5)
    ctx.stroke()
  }
  function drawVerticalLine(x) {
    ctx.beginPath()
    ctx.moveTo(x + 0.5, 0)
    ctx.lineTo(x + 0.5, canvas.height)
    ctx.stroke()
  }
  function drawGruidewires(x, y) {
    ctx.save()
    ctx.strokeStyle = 'rgba(0,0,230,0.4)'
    ctx.lineWidth = 0.5
    drawVerticalLine(x)
    drawHorizontalLine(y)
    ctx.restore()
  }

  canvas.addEventListener('mousedown', e => {
    const loc = windowToCanvas(e.clientX, e.clientY)
    e.preventDefault()

    saveDrawingSurface();
    mousedown.x = loc.x
    mousedown.y = loc.y
    dragging = true
  })

  canvas.addEventListener('mousemove', e => {
    let loc;

    if (dragging) {
      e.preventDefault()
      loc = windowToCanvas(e.clientX, e.clientY)
      restoreDrawingSurface()
      updateRubberband(loc)
      if (guidewires) {
        drawGruidewires(loc.x, loc.y)
      }
    }
  })
  canvas.addEventListener('mouseup', e => {
    const loc = windowToCanvas(e.clientX, e.clientY)
    restoreDrawingSurface()
    updateRubberband(loc)
    dragging = false
  })
}