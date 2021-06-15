import {
  Scene,
  MouseController,
  KeyboardController,
  Button,
  Label,
  Layer,
  StaticLayer,
  Entity,
  Vector2
} from './starlite.js'

import mouseButtonHandler from './utils.js'

class GameKit {
  constructor () {
    // Create default start menu
    this.menu = new Scene()
    const mb = new StaticLayer('Background', 0)
    const ml = new Layer('Menu', 1)

    const back = new Entity()
    back.x = mb.width / 2
    back.y = mb.height / 2
    back.scale = new Vector2(mb.width, mb.height)
    back.color = '#000000'

    this.menuButton = new Button()
    this.menuButton.text = 'Start Game!'
    this.menuButton.x = ml.width / 2
    this.menuButton.y = ml.height / 2
    this.menuButton.color = '#ffffff'
    this.menuButton.fontColor = '#000000'
    this.menuButton.fontSize = 48

    mb.addEntity(back)
    ml.addEntity(this.menuButton)
    this.menu.addLayers([ml, mb])

    // Create default game scene
    this.game = new Scene()
    const gb = new StaticLayer('Background', 0)
    const ui = new Layer('User Interface', 2)
    const gameBackground = new Entity()
    gameBackground.x = gb.width / 2
    gameBackground.y = gb.height / 2
    gameBackground.scale = new Vector2(gb.width, gb.height)
    gameBackground.color = '#333333'

    const comingSoon = new Label()
    comingSoon.text = 'Coming soon'
    comingSoon.x = ui.width / 2
    comingSoon.y = ui.height / 2
    comingSoon.color = '#dddddd'

    gb.addEntity(gameBackground)
    ui.addEntity(comingSoon)
    this.game.addLayers([gb, ui])

    // Create some default listeners
    this.mouse = new MouseController()
    this.mouse.element = ui.canvas

    const click = () => {
      this.menu.stop()
      this.menu.clear()
      this.game.start()
    }

    const hover = (isHovered) => {
      if (isHovered) {
        this.menuButton.color = '#dddddd'
        this.menuButton.dirty = true
        return
      }
      this.menuButton.color = '#ffffff'
      this.menuButton.dirty = true
    }
    mouseButtonHandler(this.mouse, this.menuButton, click, hover)

  }

  set gameScene (newScene) {
    this.game.stop()
    this.game.clear()
    this.game = newScene
  }

  start () {
    this.menu.start()
  }
}

export default GameKit
