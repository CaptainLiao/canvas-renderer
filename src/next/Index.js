import Stage from './Stage'
import Layer from './Layer'
import Group from './Group'

export default class ECanvas {
  static use(plugin) {
    plugin.install(ECanvas)
  }
}

ECanvas.use(Stage)
ECanvas.use(Layer)
ECanvas.use(Group)

