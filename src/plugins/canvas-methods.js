const methods = [
  'fillStyle', 'font', 'globalAlpha',
  'lineCap', 'lineDash', 'lineJoin', 
  'lineWidth', 'miterLimit', 'strokeStyle',
  'textAlign', 'textBaseline', 'strokeStyle',
]

export default function (ctx){
  if (__buildTarget__ === 'mp') {
    const version = wx.getSystemInfoSync().SDKVersion
    if (compareVersion(version, '1.9.90') >= 0) return
    
    methods.forEach(key => {
      if (key === 'font') {
        Object.defineProperty(ctx, key, {
          get() {
            return ctx[key]
          },
          set(value) {
            ctx.setFontSize(getNumberFromStr(value) || 12)
          }
        })
      }

      Object.defineProperty(ctx, key, {
        get() {
          return ctx[key]
        },
        set(value) {
          ctx['set' + capitalize(key)](value)
        }
      })
    })
  }
  
}


function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('')
}

function getNumberFromStr(str) {
  const arr = str.split(' ')
    .map(item => parseFloat(item))
    .filter(item => item && !isNaN(item))

  return arr[0]
}
