import Scene from './scene.js'
import PhysicsLayer from './physicsLayer.js'
import PhysicsEntity from './physicsEntity.js'
import Entity from './entity.js'
import Layer from './layer.js'
import Vector2 from './vector2.js'
import MouseController from './mouseController.js'
import KeyboardController from './keyboardController.js'

const s = new Scene()
const l1 = new Layer('Background', 0)
const l2 = new PhysicsLayer('Ground', 1)
const l3 = new Layer('Foreground', 2)

const f = new Entity()
f.scale = new Vector2(l3.width, l3.height)
f.x = l1.width / 2
f.y = l1.height / 2
f.sprite =
  'https://forum.affinity.serif.com/uploads/monthly_2020_04/595FAD8C-E33F-4E12-A974-9B2D043A2BA3.png.eac9bd8cac80378692e4115553790af8.png'

const b = new Entity()
b.scale = new Vector2(l1.width, l1.height)
b.color = '#bbeebb'
b.x = l1.width / 2
b.y = l1.height / 2

const e = new PhysicsEntity()
e.x = 500
e.y = 250
e.rotation = 60
e.scale = new Vector2(200, 200)
e.color = '#ffbad2'
e.applyForce(new Vector2(-0.05, 0))

const e2 = new PhysicsEntity()
e2.x = 50
e2.y = 200
e2.scale = new Vector2(50, 50)
e2.rotation = 80
e2.sprite =
  'https://static.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png'
e2.applyForce(new Vector2(0.05, 0))

const mouse = new MouseController()
mouse.onclick = event => console.log(`${event.clientX} on ${event.target}`)

const keyboard = new KeyboardController()
keyboard.keydown = e2.movement
keyboard.keyup = e2.movement

l2.addEntity(e2)
l2.addEntity(e)
l1.addEntity(b)
// l3.addEntity(f)

s.addLayer(l2)
s.addLayer(l1)
s.addLayer(l3)

s.start()

// setTimeout(() => keyboard.keydown = event => console.log(`New ${event.key}`), 2000)
setTimeout(() => {
  mouse.element = l3.canvas
}, 2000)
