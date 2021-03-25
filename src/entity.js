import Transform from './transform.js'
import Vector2 from './vector2.js'

export default class Entity {
  /**
   * @param {string} sprite
   * @param {number} priority
   */
  constructor (sprite = 'default', priority = 0) {
    this.transform = new Transform()
    this._sprite = sprite
    this.ready = false
    this.active = true
    this.dirty = true
    this.priority = priority
    this.color = '#ffbad2'
  }

  /**
   * get x - Get the x component of this transform's position
   *
   * @return {number} The x component of position
   */
  get x () {
    return this.transform.x
  }

  /**
   * get y - Get the y component of this transform's position
   *
   * @return {number} The y component of position
   */
  get y () {
    return this.transform.y
  }

  /**
   * @returns {Image|string}
   */
  get sprite () {
    return this._sprite
  }

  /**
   * get scale - Get the value for this transform's scale
   *
   * @return {number} The value for this transform's scale
   */
  get scale () {
    return this.transform.scale
  }

  get width () {
    return this.transform.width
  }

  get height () {
    return this.transform.height
  }

  get center () {
    return new Vector2(this.x + this.width / 2, this.y + this.height / 2)
  }

  /**
   * get rotation - Get the value of this transform's rotation
   *
   * @return {number} The rotation value, in degrees
   */
  get rotation () {
    return this.transform.rotation
  }

  /**
   * set x - Sets the x component of this transform's position
   *
   * @param  {number} newX The new x component
   */
  set x (newX) {
    try {
      this.transform.x = newX
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * set y - Sets the y component of this transform's position
   *
   * @param  {number} newY The new y component
   */
  set y (newY) {
    try {
      this.transform.y = newY
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * @param {string} newSprite
   */
  set sprite (newSprite) {
    if (window) {
      this._sprite = new window.Image(this.width, this.height)
      this._sprite.src = newSprite
      this.ready = false
      this.sprite.onload = () => {
        this.dirty = true
        this.preRender()
      }
    }
  }

  /**
   * set size - Sets the size of this transform to the given vector
   *
   * @param  {Vector2} newSize The vector {width, height}
   */
  set scale (newSize) {
    try {
      this.transform.vectorScale(newSize)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * set rotation - Sets the value for this transform's rotation
   *
   * @param  {number} newRot The new rotation value, in degrees
   */
  set rotation (newRot) {
    try {
      this.transform.rotation = newRot
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * scale - Scales this transform by the given factor
   *
   * @param  {number} scaleFactor The factor by which to scale
   */
  scaleBy (scaleFactor) {
    try {
      this.transform.scalarScale(scaleFactor)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * preRender - Ensures that this entity is prepared to be rendered
   *
   */
  preRender () {
    this.ready = true
  }

  /**
   * render - Renders this entity on the given context
   *
   * @param  {CanvasRenderingContext2D} ctx the rendering context for your HTML canvas
   */
  render (ctx) {
    if (this.ready && this.dirty && this.active) {
      // Draw using canvas context
      ctx.translate(this.center.x, this.center.y)
      ctx.rotate((Math.PI / 180) * this.rotation)
      ctx.translate(-this.center.x, -this.center.y)

      if (this.sprite === 'default') {
        ctx.fillStyle = this.color
        ctx.strokeStyle = '#000000'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)
      } else {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height)
      }

      ctx.translate(this.center.x, this.center.y)
      ctx.rotate((Math.PI / 180) * -this.rotation)
      ctx.translate(-this.center.x, -this.center.y)
    }
  }

  /**
   * postRender - Cleans this entity and unreadies it
   *
   */
  postRender () {
    this.ready = false
    this.dirty = false
  }
}
