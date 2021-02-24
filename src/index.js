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

export default Renderer