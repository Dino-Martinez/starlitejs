import Scene from './scene.js'
import Layer from './layer.js'
import Entity from './entity.js'
import Vector2 from './vector2.js'

const s = new Scene()
const l1 = new Layer('Background', 0)
const l2 = new Layer('Ground', 1)
const l3 = new Layer('Foreground', 2)

const f = new Entity()
f.scale = new Vector2(l3.width, l3.height)
f.sprite =
  'https://forum.affinity.serif.com/uploads/monthly_2020_04/595FAD8C-E33F-4E12-A974-9B2D043A2BA3.png.eac9bd8cac80378692e4115553790af8.png'

const b = new Entity()
b.scale = new Vector2(l1.width, l1.height)
b.color = '#bbeebb'

const e = new Entity()
e.x = 150
e.y = 150
e.scale = new Vector2(200, 200)
e.rotation = 50
e.color = '#ffbad2'

const e2 = new Entity()
e2.x = 200
e2.y = 200
e2.scale = new Vector2(100, 100)
e2.sprite =
  'https://static.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png'

l2.addEntity(e2)
l2.addEntity(e)
l1.addEntity(b)
l3.addEntity(f)

s.addLayer(l2)
s.addLayer(l1)
s.addLayer(l3)

const loop = () => {
  s.render()

  requestAnimationFrame(loop)
}

loop()
