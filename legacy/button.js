import { Entity, MouseController, Vector2 } from './starlite-core.js'
import { Label } from './starlite-ui.js'

class Button extends Entity {
  constructor (sprite = 'default', priority = 0, text = 'Click me!') {
    super(sprite, priority)
    this.label = new Label()
    this.label.text = text
  }

  get fontColor () {
    return this._fontColor
  }

  set fontColor (newColor) {
    this.label.color = newColor
    this.dirty = true
  }

  set fontSize (newSize) {
    this.label.font = `${newSize}px Arial`
    this.dirty = true
  }

  set text (newText) {
    this.label.text = newText
    this.dirty = true
  }

  click = event => {
    console.log(event)
  }

  preRender (ctx) {
    if (this.dirty) {
      ctx.font = this.label.font
      const metrics = ctx.measureText(this.label.text)
      const w = metrics.width
      const h =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
      this.transform._scale = new Vector2(1.3 * w, 2 * h)
      ctx.clearRect(
        this.x - 10 - Math.ceil(this.width / 2),
        this.y - 10 - Math.ceil(this.height / 2),
        this.width + 20,
        this.height + 20
      )
      this.ready = true
    }
  }

  render (ctx) {
    if (this.dirty && this.ready && this.active) {
      super.render(ctx)
      this.label.x = this.x
      this.label.y = this.y
      this.label.dirty = true
      this.label.ready = true
      this.label.active = true
      this.label.render(ctx)
    }
  }
}

export default Button
