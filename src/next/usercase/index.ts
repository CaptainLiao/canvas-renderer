import ECanvas from '../Index'

const container = {}
const layer = new ECanvas.Layer(container)

const group = new ECanvas.Group()
const node1 = new ECanvas.Node({
  x: 0,
  y: 0,
  name: 'node1',
  width: 100,
  height: 100
})

const node2 = new ECanvas.Node({
  x: 50,
  y: 50,
  font: '12px Arial Black',
})

group.add(node1, node2)

layer.add(group)
