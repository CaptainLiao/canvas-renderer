export function createCanvas() {
  if (__buildTarget__ === 'mp') {
    return wx.createOffscreenCanvas()
  }
  return document.createElement('canvas');
}

export function createImage() {
  if (__buildTarget__ === 'mp') {    
    const canvas = createCanvas()
    return canvas.createImage();
  }
  return new Image()
}