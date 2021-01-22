import {createCanvas} from './createEle'
import canvasRenderer from '../components/canvas-renderer'


export {
  getTextWidth,
  getLineHeight,
  getTextWithEllipsis
}

function getLineHeight({style}) {
  return Math.max(parseFloat(style.fontSize) * 1.2, parseFloat(style.lineHeight || 0)) + 'px';
}

let context = null
let offCanvas = null
function getContext() {
  if (context) {
    context.clearRect(0,0, offCanvas.width, offCanvas.height)
    return context;
  }

  offCanvas = createCanvas();
  
  offCanvas.width = 1
  offCanvas.height = 1
  context = offCanvas.getContext('2d');
  if (!context) {
    context = wx.createCanvasContext('offCanvas')
  }

  canvasRenderer(context)
  
  return context;
}

function getTextWidth({style, text}) {
  const context = getContext();

  context.setFont(style, text)
  const w = context.measureText(text).width + style.paddingLeft + style.paddingRight

  return w || 0;
}

function getTextWithEllipsis(style, text) {
  const value = String(text);

  let maxWidth = style.width;
  const wordWidth = getTextWidth({
    style,
    text
  });

  // 对文字溢出的处理，默认用...
  const textOverflow = style.textOverflow || 'ellipsis';

  // 文字最大长度不超限制
  if (wordWidth <= maxWidth) {
    return value;
  }

  // 对于用点点点处理的情况，先将最大宽度减去...的宽度
  if (textOverflow === 'ellipsis') {
    maxWidth -= getTextWidth({style, text: '...'});
  }

  let length = value.length - 1;
  let str = value.substring(0, length);

  while (getTextWidth({style, text: str}) > maxWidth && length > 0) {
    length--;
    str = value.substring(0, length);
  }

  return (length && textOverflow === 'ellipsis' ?
    str + '...' :
    str);
}