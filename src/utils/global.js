const data = {
  canvasElement: null,
  canvasId: null,
  canvasComponentThis: null,
  canvasContext: null
}

export default {
  getCanvasId() {
    return data.canvasId
  },
  setCanvasId(canvasId) {
    data.canvasId = canvasId.slice(1)
  },

  getCanvas() {
    return data.canvasElement
  },
  setCanvas(canvasElement) {
    data.canvasElement = canvasElement
  },

  getCanvasComponentThis() {
    return data.canvasComponentThis
  },
  setCanvasComponentThis(_this) {
    return data.canvasComponentThis = _this
  },

  getContext() {
    return data.canvasContext
  },
  setContext(context) {
    return data.canvasContext = context
  }
}