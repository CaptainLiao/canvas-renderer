import global from './global'

let wxOffscreenCanvas = null

export function createCanvas() {
  // 基础库 2.7.0 开始支持
  if (__buildTarget__ === 'mp') {
    if (!wxOffscreenCanvas) {
      wxOffscreenCanvas = wx.createOffscreenCanvas()
    }
    
    return wxOffscreenCanvas
  }
  return document.createElement('canvas');
}

export function createImage() {
  if (__buildTarget__ === 'mp') {
    return global.getCanvas().createImage();
  }
  return new Image()
}