import Renderer from './Renderer'
import Element from './Element'
import Image from './plugins/Image'
import Text from './plugins/Text'
import View from './plugins/View'

Renderer.usePlugin('Image', Image)
Renderer.usePlugin('Text', Text)
Renderer.usePlugin('View', View)

export {
  Element
}

/**
  useage:
    const renderer = new Renderer({xml: xmlData, style})

    renderer.render('#canvas')
    renderer.toDataURL()
      .then(res => console.log(res))
 */

export default Renderer