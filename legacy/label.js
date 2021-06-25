import { Entity } from './starlite-core.js'

class Label extends Entity {
  constructor (
    sprite = 'default',
    priority = 0,
    text = '',
    fontSize = '30px',
    fontFamily = 'Arial',
    font = `${fontSize} ${fontFamily}`
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

  set fontSize(newSize) {
    if (newSize < 4) {
      newSize = 4
    } else if (newSize > 72) {
      newSize = 72
    }
    this.fontSize = `${newSize}px`
    this.updateFont()
  }

  set fontFamily(newFamily) {
    this.fontFamily = newFamily
    this.updateFont()
  }

  updateFont() {
    this.font = `${fontSize} ${fontFamily}`
    this.dirty = true
  }

  clear (ctx) {
    if (this.dirty) {
      ctx.font = this.font
      const metrics = ctx.measureText(this._text)
      const w = metrics.width
      const h =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent

      ctx.clearRect(
        this.x - 10 - Math.ceil(w / 2),
        this.y - 10 - Math.ceil(h / 2),
        w + 20,
        h + 20
      )
    }
  }

  render (ctx) {
    if (this.dirty && this.ready && this.active) {
      ctx.font = this.font
      ctx.textAlign = 'center'
      const metrics = ctx.measureText(this._text)
      const w = metrics.width
      const h =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
      ctx.translate(0, h / 2)
      ctx.fillStyle = this.color
      ctx.fillText(this._text, this.x, this.y)
      ctx.strokeStyle = '#FF0000'
      ctx.translate(0, -h / 2)
    }
  }
}

export default Label
