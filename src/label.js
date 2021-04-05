import { Entity } from './starlite-core.js'

class Label extends Entity {
  constructor (sprite = 'default', priority = 0, text = '') {
    super(sprite, priority)
    this._text = text
  }

  get text () {
    return this._text
  }

  set text (newText) {
    this._text = newText
    this.dirty = true
  }

  render (ctx) {
    if (this.dirty && this.ready && this.active) {
      ctx.font = '30px Arial'
      const metrics = ctx.measureText(this._text)
      const w = metrics.width
      const h =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent

      ctx.clearRect(0, 0, 500, 500)
      ctx.textAlign = 'center'
      ctx.fillStyle = '#ffffff'
      ctx.fillText(this._text, this.x, this.y)
    }
  }
}

export default Label
