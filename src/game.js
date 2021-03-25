import Scene from './scene.js'
import Layer from './layer.js'
import Entity from './entity.js'
import Vector2 from './vector2.js'

const s = new Scene()
const l1 = new Layer('Background', 0)
const l2 = new Layer('Foreground', 1)

const b = new Entity()
b.size = new Vector2(600, 800)
b.color = '#dddddd'

const e = new Entity()
e.x = 50
e.y = 150
e.scale = new Vector2(50, 100)
e.rotation = 50
e.color = '#ffbad2'

const e2 = new Entity()
e2.x = 150
e2.y = 150
e2.scale = new Vector2(50, 150)
e2.rotation = 90
e2.color = '#00214d'

l2.addEntity(e2)
l2.addEntity(e)
l1.addEntity(b)

s.addLayer(l2)
s.addLayer(l1)

s.render()
