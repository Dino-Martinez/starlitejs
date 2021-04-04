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

const b = new Entity()
b.x = l1.width / 2
b.y = l1.height / 2
b.scale = new Vector2(l1.width, l1.height)
b.color = '#000000'

const border1 = new PhysicsEntity()
border1.scale = new Vector2(50, l1.height)
border1.x = -25
border1.y = l1.height / 2
border1.freeze = { x: true, y: true }
border1.handleCollision = result => {
  if (result.collided) {
    console.log('right wins')
  }
}

const border2 = new PhysicsEntity()
border2.scale = new Vector2(l1.width, 50)
border2.x = l1.width / 2
border2.y = -25
border2.freeze = { x: true, y: true }

const border3 = new PhysicsEntity()
border3.scale = new Vector2(50, l1.height)
border3.x = l1.width + 25
border3.y = l1.height / 2
border3.freeze = { x: true, y: true }
border3.handleCollision = result => {
  if (result.collided) {
    console.log('left wins')
  }
}

const border4 = new PhysicsEntity()
border4.scale = new Vector2(l1.width, 50)
border4.x = l1.width / 2
border4.y = l1.height + 25
border4.freeze = { x: true, y: true }

const paddle = new PhysicsEntity()
paddle.x = 30
paddle.y = l1.height / 2
paddle.scale = new Vector2(15, 150)
paddle.freeze.x = true
paddle.color = '#ffffff'

const keyboard = new KeyboardController(true)
keyboard.keydown = paddle.movement
keyboard.keyup = paddle.movement
paddle.addController(keyboard)
paddle.handleCollision = result => {
  if (result.collided) {
    paddle.velocity.y = 0
  }
}

const ball = new PhysicsEntity()
ball.x = l1.width / 2
ball.y = l1.height / 2
ball.scale = new Vector2(15, 15)
ball.color = '#ffffff'
ball.velocity = new Vector2(-3, 0)
ball.rotation = 1

l2.addEntities([border1, border2, border3, border4, paddle, ball])
l1.addEntity(b)
s.addLayers([l1, l2])
s.start()
