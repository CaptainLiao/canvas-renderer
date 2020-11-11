export default function measureText({
  text = 'm', 
  lineHeight,
  fontSize = '14px', 
  fontFamily = "Times New Roman",
}) {
  const tmpDiv = document.createElement('span');
  tmpDiv.innerHTML = text
  tmpDiv.style.fontSize = fontSize
  tmpDiv.style.fontFamily = fontFamily
  if (lineHeight) {
    tmpDiv.style.lineHeight = lineHeight
  }
  // tmpDiv.style.position = 'fixed'
  // tmpDiv.style.left = '-10000px'
  document.body.appendChild(tmpDiv)

  const rect = tmpDiv.getBoundingClientRect()
  // 半行距
  const halfLineSpace = (rect.height - parseInt(fontSize)) / 2
  
  return {
    width: Math.ceil(rect.width),
    height: rect.height - halfLineSpace,
    halfLineSpace
  }
}