export function createCanvas() {
  if (__buildTarget__ === 'web') {
    return document.createElement('canvas');
  }
  return wx.createCanvas();
}

export function createImage() {
  if (__buildTarget__ === 'web') {
    return new Image()
  }

  const canvas = wx.createOffscreenCanvas()
  return canvas.createImage();
}

export function measureText() {
  const c = wx.createOffscreenCanvas()
  const ctx = c.getContext('2d')
  ctx.font = 'italic bold 20px cursive'
  const metrics = ctx.measureText('Hello World')
  console.log(metrics.width)
}