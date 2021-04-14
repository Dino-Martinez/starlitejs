import { Entity } from './starlite-core.js'

class Label extends Entity {
  constructor (
    sprite = 'default',
    priority = 0,
    text = '',
    font = '30px Arial'
  ) {
    super(sprite, priority)
    this._text = text
    this.font = font
  }

  get text () {
    return this._text
  }

  set text (newText) {
    this._text = newText
    this.dirty = true
  }

  clear (ctx) {
    ctx.font = this.font
    const metrics = ctx.measureText(this._text)
    const w = metrics.width
    const h = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent

    ctx.clearRect(0, 0, 500, 500)
  }

  render (ctx) {
    if (this.dirty && this.ready && this.active) {
      ctx.font = this.font
      ctx.textAlign = 'center'
      ctx.fillStyle = this.color
      ctx.fillText(this._text, this.x, this.y)
    }
  }
}

export default Label
