export const textStyles = ['color', 'fontSize', 'textAlign', 'fontWeight', 'lineHeight', 'lineBreak']

export const scalableStyles = ['left', 'top', 'right', 'bottom', 'width', 'height',
  'margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom',
  'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
  'fontSize', 'lineHeight',
  'borderRadius',
  'minWidth', 'maxWidth', 'minHeight', 'maxHeight'
]

export const layoutAffectedStyles = [
  'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'width', 'height']

export const defaultStyle = {
  diplay: 'flex',
  flexDirection: 'row',

  padding: 0,
  margin: 0,
  borderRadius: 0,
  borderWidth: 0,

  borderColor: '#000',
  backgroundColor: '',
}

export function parseStyle(s) {
  s.paddingTop = s.paddingTop || s.padding
  s.paddingRight = s.paddingRight || s.padding
  s.paddingBottom = s.paddingBottom || s.padding
  s.paddingLeft = s.paddingLeft || s.padding

  s.marginTop = s.marginTop || s.margin
  s.marginRight = s.marginRight || s.margin
  s.marginBottom = s.marginBottom || s.margin
  s.marginLeft = s.marginLeft || s.margin

  s.borderTopWidth = s.borderTopWidth || s.borderWidth
  s.borderRightWidth = s.borderRightWidth || s.borderWidth
  s.borderBottomWidth = s.borderBottomWidth || s.borderWidth
  s.borderLeftWidth = s.borderLeftWidth || s.borderWidth

  s.borderTopLeftRadius = s.borderTopLeftRadius || s.borderRadius
  s.borderTopRightRadius = s.borderTopRightRadius || s.borderRadius
  s.borderBottomLeftRadius = s.borderBottomLeftRadius || s.borderRadius
  s.borderBottomRightRadius = s.borderBottomRightRadius || s.borderRadius

  return s
}
