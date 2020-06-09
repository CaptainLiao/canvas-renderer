import Stage from './Stage'
import Layer from './Layer'
import Group from './Group'

export default class CanvasDance {
  static use(plugin) {
    plugin.install(CanvasDance)
  }
}

CanvasDance.use(Stage)
CanvasDance.use(Layer)
CanvasDance.use(Group)

