import Layout from './Layout'
import global from './utils/global'

export default class Renderer {
  constructor({xml, style}) {
    this.xml = xml
    this.style = style
    this.layout = new Layout({
      style: {
        width: 0,
        height: 0,
      },
      name: 'layout'
    });
    this.renderred = null
  }

  static usePlugin(name, ELEMENT) {
    Layout.prototype['$' + name] = ELEMENT
  }

  render(canvasId, canvasComponentThis) {
    const processCanvas =__buildTarget__ === 'web'
      ? canvasInH5
      : canvasInMP;

    return this.renderred = processCanvas(canvasId, canvasComponentThis)
      .then(({ctx, canvasEle, clientWidth, clientHeight}) => {
        global.setCanvas(canvasEle)
        global.setCanvasId(canvasId)
        global.setCanvasComponentThis(canvasComponentThis)

        drawGrid(ctx, clientWidth, clientHeight)

        const style = _scaleStyles({style: this.style, clientWidth})
        return this.layout
          .init(this.xml, style)
          .render(ctx)
      })
  }

  toDataURL(type = 'image/png', encoderOptions) {
    if (!this.renderred) throw new Error ('render 未调用')

    return this.renderred.then(() => {
      // toDataURL 在小程序基础库 2.11.0 开始支持
      const url = global.getCanvas().toDataURL(type, encoderOptions)
      return url
    })
  }

  saveImageToPhotosAlbum(base64img, name = 'test.png',) {
    if (__buildTarget__ !== 'mp') {
      throw new Error('saveImageToPhotosAlbum 仅支持小程序使用')
    }

    const filePath = `${wx.env.USER_DATA_PATH}/${name}`
    const fileManager = wx.getFileSystemManager()

    fileManager.writeFileSync(filePath, base64img.slice(22), 'base64')

    return new Promise((resolve, reject) => {
      wx.saveImageToPhotosAlbum({
        filePath,
        success: resolve,
        fail: reject
      })
    })
  }
}

function canvasInH5(canvasId) {
  const dpr = window.devicePixelRatio
  const w = document.documentElement.clientWidth
  const h = document.documentElement.clientHeight
  const canvasEle = document.querySelector(canvasId)
  const ctx = canvasEle.getContext('2d')
  canvasEle.width = w*dpr
  canvasEle.height = h*dpr
  canvasEle.style.width = `${w}px`
  canvasEle.style.height = `${h}px`
  ctx.scale(dpr, dpr)

  return Promise.resolve({ctx, canvasEle, clientWidth: w, clientHeight: h})
};

// canvasComponentThis: 在自定义组件下，当前组件实例的this
function canvasInMP(canvasId) {
  const {
    screenWidth,
    screenHeight,
    pixelRatio,
  } = wx.getSystemInfoSync();
  const dpr = pixelRatio

  const canvasRef = wx.createSelectorQuery().select(canvasId)

  return new Promise(resolve => {
    canvasRef.node(res => {
      const canvasEle = res.node;
      const ctx = canvasEle.getContext('2d')
      canvasEle.width = canvasEle._width*dpr
      canvasEle.height = canvasEle._height*dpr
      ctx.scale(dpr, dpr)

      resolve({
        ctx, 
        canvasEle, 
        clientWidth: screenWidth, 
        clientHeight: screenHeight
      })
    })
    .exec()
  })
};

const LAYOUT_BASE_WIDTH = 375
function _scaleStyles({clientWidth, style}) {
  const x = clientWidth/LAYOUT_BASE_WIDTH

  return Object.keys(style).reduce((res, key) => {
    const s = style[key]
    res[key] = Object.keys(s).reduce((acc, k) => {
      const [n, t] = String(s[k]).replace(/(\d+)(\D+)/g, '$1-$2').split('-')
      if (isNaN(parseFloat(n))) {
        acc[k] = s[k]
        return acc
      }
      acc[k] = n*x
      if (t) acc[k] += t
      return acc
    }, {})

    return res
  }, {})
}

function drawGrid(ctx, w, h) {
  ctx.save()
  const gap = 10
  for (let i = 1; i < w/gap; ++i) {
    ctx.moveTo(i * gap, 0)
    ctx.lineTo(i*gap, h)
  }
  for (let i = 1; i < w/gap; ++i) {
    ctx.moveTo(0, i*gap)
    ctx.lineTo(w, i*gap)
  }
  for (let i = 0; i < w; i += 2) {
    ctx.fillText(i*gap*2, i*gap*2 - 6, 10)
  }

  ctx.strokeStyle = 'rgba(0, 0, 0,.15)'
  ctx.stroke()
  ctx.restore()
}