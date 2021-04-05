import {
  Scene,
  PhysicsLayer,
  PhysicsEntity,
  Entity,
  Layer,
  Vector2,
  MouseController,
  KeyboardController,
  Label
} from './starlite.js'

// Create a temporary points counter
let leftPoints = 0
let rightPoints = 0

const s = new Scene()
const l1 = new Layer('Background', 0)
const l2 = new PhysicsLayer('Ground', 1)
const l3 = new Layer('Foreground', 2)

const score = new Label()
score.text = '0 | 0'
score.x = l3.width / 2
score.y = 30

const endGame = winner => {
  s.stop()
  score.text = `${winner} wins!`
}

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
    rightPoints++
    score.text = `${leftPoints} | ${rightPoints}`
    l2.removeEntity(ball)
    ball.x = l2.width / 2
    ball.y = l2.height / 2
    l2.addEntity(ball)
    if (rightPoints >= 5) {
      endGame('Right')
    }
  }
}

const border2 = new PhysicsEntity()
border2.scale = new Vector2(l1.width, 50)
border2.x = l2.width / 2
border2.y = -25
border2.freeze = { x: true, y: true }

const border3 = new PhysicsEntity()
border3.scale = new Vector2(50, l1.height)
border3.x = l2.width + 25
border3.y = l2.height / 2
border3.freeze = { x: true, y: true }
border3.handleCollision = result => {
  if (result.collided) {
    leftPoints++
    score.text = `${leftPoints} | ${rightPoints}`
    l2.removeEntity(ball)
    ball.x = l2.width / 2
    ball.y = l2.height / 2
    l2.addEntity(ball)
    if (leftPoints >= 5) {
      endGame('Left')
    }
  }
}

const border4 = new PhysicsEntity()
border4.scale = new Vector2(l2.width, 50)
border4.x = l2.width / 2
border4.y = l2.height + 25
border4.freeze = { x: true, y: true }

const paddle = new PhysicsEntity()
paddle.x = 30
paddle.y = l2.height / 2
paddle.scale = new Vector2(15, 150)
paddle.freeze.x = true
paddle.color = '#ffffff'

const paddle2 = new PhysicsEntity()
paddle2.playerNum = 2
paddle2.x = l2.width - 30
paddle2.y = l2.height / 2
paddle2.scale = new Vector2(15, 150)
paddle2.freeze.x = true
paddle2.color = '#ffffff'

const keyboard = new KeyboardController(true)
const doubleHandler = e => {
  paddle.movement(e)
  paddle2.movement(e)
}

keyboard.keydown = doubleHandler
keyboard.keyup = doubleHandler
paddle.addController(keyboard)
paddle2.addController(keyboard)
paddle.handleCollision = result => {
  if (result.collided) {
    paddle.velocity.y = 0
  }
}
paddle2.handleCollision = result => {
  if (result.collided) {
    paddle2.velocity.y = 0
  }
}

const ball = new PhysicsEntity()
ball.x = l2.width / 2
ball.y = l2.height / 2
ball.scale = new Vector2(15, 15)
ball.color = '#ffffff'
ball.velocity = new Vector2(-3, 3)
ball.rotation = 1

l3.addEntity(score)
l2.addEntities([border1, border2, border3, border4, paddle, paddle2, ball])
l1.addEntity(b)
s.addLayers([l1, l2, l3])
s.start()
