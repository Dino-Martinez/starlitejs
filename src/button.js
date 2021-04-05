import { Entity, MouseController } from './starlite-core.js'
import { Label } from './starlite-ui.js'

class Button extends Entity {
  constructor (sprite = 'default', priority = 0, text = 'Click me!') {
    super(sprite, priority)
    this.label = new Label()
    this.label.text = text
    this._fontColor = '#000000'
  }

  get fontColor () {
    return this._fontColor
  }

  set fontColor (newColor) {
    this._fontColor = newColor
    this.label.color = newColor
  }

  click = event => {
    console.log(event)
  }

  render (ctx) {
    if (this.dirty && this.ready && this.active) {
      super.render(ctx)
      this.label.x = this.x
      this.label.y = this.y + this.height / 4
      this.label.dirty = true
      this.label.ready = true
      this.label.active = true
      this.label.render(ctx)
    }
  }
}

export default Button
