import Renderer from './Renderer'
import {
  Element,
  Image,
  Text,
  View,
} from './components'

Renderer.use('Image', Image)
Renderer.use('Text', Text)
Renderer.use('View', View)

export {
  Element
}

export default Renderer