const tmpDiv = document.createElement('span');

export default function measureText({
  text = 'm', 
  style,
}) {
  tmpDiv.innerHTML = text
  tmpDiv.style.fontSize = style.fontSize
  tmpDiv.style.fontFamily = style.fontFamily
  tmpDiv.style.display = 'inline-block'

  if (style.lineHeight) {
    tmpDiv.style.lineHeight = style.lineHeight
  }
  tmpDiv.style.position = 'fixed'
  tmpDiv.style.left = '-10000px'
  document.body.appendChild(tmpDiv)

  const rect = tmpDiv.getBoundingClientRect()
  document.body.removeChild(tmpDiv);
  // 半行距
  const halfLineSpace = (rect.height - parseInt(style.fontSize)) / 2
  
  return {
    width: Math.ceil(rect.width) + style.paddingLeft + style.paddingRight,
    height: rect.height + style.paddingTop + style.paddingBottom,
    halfLineSpace
  }
}