export default function measureText({
  text = 'm', 
  style,
}) {
  const tmpDiv = document.createElement('span');
  tmpDiv.innerHTML = text
  tmpDiv.style.fontSize = style.fontSize
  tmpDiv.style.fontFamily = style.fontFamily
  if (style.lineHeight) {
    tmpDiv.style.lineHeight = style.lineHeight
  }
  tmpDiv.style.position = 'fixed'
  tmpDiv.style.left = '-10000px'
  document.body.appendChild(tmpDiv)

  const rect = tmpDiv.getBoundingClientRect()
  // 半行距
  const halfLineSpace = (rect.height - parseInt(style.fontSize)) / 2
  
  return {
    width: Math.ceil(rect.width),
    height: rect.height,
    halfLineSpace
  }
}