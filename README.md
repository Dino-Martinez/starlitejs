<img alt="npm" src="https://img.shields.io/npm/v/starlite"> <img alt="npm" src="https://img.shields.io/npm/dt/starlite?style=flat-square">

# starlite.js

## A comprehensive and extensible game engine using JavaScript and HTML Canvas

# Installation

`npm i starlite`

# Usage

In order to create a blank 'coming soon' game with default start menu:

```
import { GameKit } from './starlite.js'

const game = new GameKit()
game.start()

```

In order to buil a simple pong game using GameKit:

```
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

```

# Tutorial

Below is a simple tutorial on building a game with StarLite

## Creating a Scene

All games will require at least one Scene. A Scene object represents a list of layers, and provides functionality to add layers, remove layers, render all layers, start the animation loop, and end the animation loop.

To build and run a scene, do the following:

```
const scene = new Scene()
s.addLayer(layer)

if (timeToStart) {
  scene.start()
}

if (timeToStop) {
  scene.stop()
}
```

## Creating Layers

All scenes will require at least one Layer. A Layer object represents an html canvas with an associated list of entities, This object provides functionality to add entities, remove entities, and render all entities.

To build a layer and display it, do the following (Note, you will likely not have to render a layer manually, as that is handled by the Scene class):

```
// Constructor is (name, priority, width, height) where priority determines whether this layer is drawn on top of other layers (higher priority will be closer to the top/most visible)
const layer = new Layer('Layer Name', 0, 640,480)
layer.addEntity(entity)
layer.render()

```

## Creating Static Entities

All layers will require at least one Entity in order to render anything. An Entity object represents a transform (position, rotation, size) and an optional sprite URL. This object provides functionality to change the transform, change the sprite URL (dynamically loading the image), render itself onto the layer, and handle very simple movement

To build an entity and display it, do the following:

```
const entity = new Entity()
entity.scale = new Vector2(50, 50)
// If you don't want a sprite, set color
entity.color = '#000000'

//If you want a sprite, set url
entity.sprite = 'some_image_url'

entity.x = 50
entity.y = 50

```

## Creating Dynamic/Physics Enabled Entities

## Adding Controllers and Handlers
