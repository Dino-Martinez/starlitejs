import {
  GameKit,
  Scene,
  StaticLayer,
  PhysicsLayer,
  PhysicsEntity,
  Layer,
  Vector2,
  Entity,
  KeyboardController,
  Label
} from './starlite.js'

// Build our layered scene
const scene = new Scene()
const playArea = new PhysicsLayer('Ground', 0)

// Create a player that can move around
const player = new PhysicsEntity()
player.x = playArea.width / 2
player.y = playArea.height / 2
player.scale = new Vector2(15, 15)
player.color = '#000000'
player.rotation = 0

// Create default key press controller - movement on wasd
const keyboard = new KeyboardController(true)

// define a handler to call the player movement function
const handler = e => {
  player.movement(e)
}

keyboard.keydown = handler
keyboard.keyup = handler

// Set paddle controllers to key press handler
player.addController(keyboard)

// Add gameplay objects to our game layer
playArea.addEntity(player)

// Add all layers to our scene
scene.addLayers([playArea])

const game = new GameKit()

// Set our gamekit scene, and start
game.game = scene
game.start()
