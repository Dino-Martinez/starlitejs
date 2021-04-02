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
const e = new PhysicsEntity()
e.scale = new Vector2(50, 50)
e.x = 50
e.y = 150
e.rotation = 45
e.color = '#000000'
e.velocity = new Vector2(1, 0)

const e2 = new PhysicsEntity()
e2.scale = new Vector2(50, 50)
e2.x = 250
e2.y = 150
e2.rotation = 60
e2.color = '#ff0000'
e2.velocity = new Vector2(-1, 0)
console.log(e2.velocity)

const mouse = new MouseController()
mouse.onclick = event => console.log(event.clientX)

l2.addEntities([e, e2])
s.addLayers([l1, l2])
s.start()
// const paddle = new PhysicsEntity()
// paddle.scale = new Vector2(15, 75)
// paddle.x = 50
// paddle.y = 100
// paddle.freeze = { x: true, y: false }
//
// const b = new Entity()
// b.scale = new Vector2(l1.width, l1.height)
// b.color = '#bbeebb'
// b.x = l1.width / 2
// b.y = l1.height / 2
//
// const right = new PhysicsEntity()
// right.scale = new Vector2(100, l2.height)
// right.x = l2.width + 50
// right.y = l2.height / 2
// right.color = '#000000'
//
// const ball = new PhysicsEntity()
// ball.scale = new Vector2(25, 25)
// ball.x = l2.width / 2
// ball.y = l2.height / 2
// ball.color = '#9999ff'
// ball.velocity = new Vector2(-1, 0)
//
// const keyboard = new KeyboardController()
// keyboard.keydown = paddle.movement
// keyboard.keyup = paddle.movement
//
// l2.addEntity(paddle)
// l2.addEntity(ball)
// l2.addEntity(right)
// l1.addEntity(b)
//
// s.addLayer(l2)
// s.addLayer(l1)
//
// const splash = new Scene()
// const splashLayer = new Layer()
// const splashSreen = new Entity()
// splashSreen.scale = new Vector2(splashLayer.width, splashLayer.height)
// splashSreen.x = splashLayer.width / 2
// splashSreen.y = splashLayer.height / 2
// splashSreen.color = '#000000'
//
// const button = new Entity()
// button.scale = new Vector2(250, 50)
// button.x = splashLayer.width / 2
// button.y = splashLayer.height / 2
// button.color = '#ffffff'
// const mouse = new MouseController()
// mouse.onclick = event => {
//   if (
//     event.clientX > button.x - button.width / 2 &&
//     event.clientX < button.x + button.width / 2
//   ) {
//     if (
//       event.clientY > button.y - button.height / 2 &&
//       event.clientY < button.y + button.height / 2
//     ) {
//       splash.stop()
//       s.start()
//     }
//   }
// }
// splashLayer.addEntity(splashSreen)
// splashLayer.addEntity(button)
// splash.addLayer(splashLayer)
//
// splash.start()

// const l3 = new Layer('Foreground', 2)
//
// const f = new Entity()
// f.scale = new Vector2(l3.width, l3.height)
// f.x = l1.width / 2
// f.y = l1.height / 2
// f.sprite =
//   'https://forum.affinity.serif.com/uploads/monthly_2020_04/595FAD8C-E33F-4E12-A974-9B2D043A2BA3.png.eac9bd8cac80378692e4115553790af8.png'
//

//
// const e = new PhysicsEntity()
// e.x = 500
// e.y = 250
// e.rotation = 60
// e.scale = new Vector2(200, 200)
// e.color = '#ffbad2'
// e.applyForce(new Vector2(-0.05, 0))
//
// const e2 = new PhysicsEntity()
// e2.x = 50
// e2.y = 200
// e2.scale = new Vector2(50, 50)
// e2.rotation = 80
// e2.sprite =
//   'https://static.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png'
// e2.applyForce(new Vector2(0.05, 0))
//
// const mouse = new MouseController()
// mouse.onclick = event => console.log(`${event.clientX} on ${event.target}`)
//
// const keyboard = new KeyboardController()
// keyboard.keydown = e2.movement
// keyboard.keyup = e2.movement
//
// l2.addEntity(e2)
// l2.addEntity(e)
// l1.addEntity(b)
// // l3.addEntity(f)
//
// s.addLayer(l2)
// s.addLayer(l1)
// s.addLayer(l3)
//
// s.start()
//
// // setTimeout(() => keyboard.keydown = event => console.log(`New ${event.key}`), 2000)
// setTimeout(() => {
//   mouse.element = l3.canvas
// }, 2000)
