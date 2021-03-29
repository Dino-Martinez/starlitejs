import Controller from './controller.js'
import Transform from './transform.js'
import Vector2 from './vector2.js'

class Entity {
  /**
   * Creates an entity.
   *
   * @class Entity
   * @classdesc Class representing an entity.
   * @see {@linkcode PhysicsEntity} for an entity that handles physics.
   *
   * @param {string} [sprite=default] The URL of the image to be rendered with the entity.
   * @param {number} [priority=0] The canvas draw priority (z-index).
   */
  constructor (sprite = 'default', priority = 0) {
    /**
     * Represents the transform of the entity.
     *
     * @type {Transform}
     */
    this.transform = new Transform()
    this._sprite = sprite
    /**
     * Represents whether or not the entity is ready to be drawn.
     *
     * @type {boolean}
     * @default false
     */
    this.ready = false
    /**
     * Represents whether or not the entity is active (will be drawn at all).
     *
     * @type {boolean}
     * @default true
     */
    this.active = true
    /**
     * Represents whether or not the entity has changed and must be redrawn.
     *
     * @type {boolean}
     * @default true
     */
    this.dirty = true
    /**
     * Represents the canvas draw priority (z-index).
     *
     * @type {number}
     * @default 0
     */
    this.priority = priority
    /**
     * Represents the fill color of default sprite.
     *
     * @type {string}
     * @default #ffbad2
     */
    this.color = '#ffbad2'
    /**
     * Represents the list of controllers that can affect the entity.
     *
     * @type {Controller[]}
     * @default []
     */
    this.controllers = []
  }

  /**
   * Represents the x component of the position of the entity.
   *
   * @type {number}
   */
  get x () {
    return this.transform.x
  }

  /**
   * Represents the y component of the position of the entity.
   *
   * @type {number}
   */
  get y () {
    return this.transform.y
  }

  /**
   * Represents the position of the entity.
   *
   * @type {number}
   */
  get position () {
    return this.transform.position
  }

  /**
   * Represents the path of the entity sprite, or default.
   *
   * @type {string}
   * @default default
   */
  get sprite () {
    return this._sprite
  }

  /**
   * Represents the size of the entity.
   *
   * @type {Vector2}
   */
  get scale () {
    return this.transform.scale
  }

  /**
   * Represents the the width of the entity.
   *
   * @type {number}
   * @readonly
   */
  get width () {
    return this.transform.width
  }

  /**
   * Represents the height of the entity.
   *
   * @type {number}
   * @readonly
   */
  get height () {
    return this.transform.height
  }

  /**
   * Represents the position of the center of the entity.
   *
   * @type {Vector2}
   * @readonly
   */
  get center () {
    return new Vector2(this.x + this.width / 2, this.y + this.height / 2)
  }

  /**
   * Represents the rotation of the entity in degrees.
   *
   * @type {number}
   */
  get rotation () {
    return this.transform.rotation
  }

  get edges () {
    return this.transform.edges
  }

  set x (newX) {
    try {
      this.transform.x = newX
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  set y (newY) {
    try {
      this.transform.y = newY
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  set sprite (newSprite) {
    if (window) {
      this._sprite = new window.Image(this.width, this.height)
      this._sprite.src = newSprite
      this.ready = false
      this.sprite.onload = () => {
        this.dirty = true
      }
    }
  }

  set scale (newSize) {
    try {
      this.transform.vectorScale(newSize)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  set rotation (newRot) {
    try {
      this.transform.rotation = newRot
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * Scales the size of the entity by a given scale factor.
   *
   * @param  {number} scaleFactor The factor by which to scale the size of the entity.
   * @throws {TypeError}
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
   * Translates the position of the entity by a given delta vector.
   *
   * @param {Vector2} delta The vector by which to translate the entity.
   */
  translate (delta) {
    this.transform.translate(delta)
    this.dirty = true
  }

  /**
   * Adds a controller for the entity to access.
   *
   * @see {@linkcode Entity#addControllers} for adding multiple controllers.
   * @see {@linkcode Entity#removeController} for removing a controller.
   *
   * @param {Controller} controller The controller to add to the entity.
   * @throws {TypeError}
   */
  addController (controller) {
    if (controller instanceof Controller) {
      this.controllers.push(controller)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Adds multiple controllers for the entity to access.
   *
   * @see {@linkcode Entity#addController} for adding a single controller.
   * @see {@linkcode Entity#removeController} for removing a controller.
   *
   * @param {Controller[]} controllers The list of controllers to add to the entity.
   * @throws {TypeError}
   */
  addControllers (controllers) {
    if (controllers.every(controller => controller instanceof Controller)) {
      this.controllers.push(...controllers)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Removes a controller from the entity.
   *
   * @see {@linkcode Entity#removeControllers} for removing multiple controllers.
   * @see {@linkcode Entity#addController} for adding a controller.
   *
   * @param {Controller} controller The controller to remove from the entity.
   * @throws {TypeError}
   */
  removeController (controller) {
    if (controller instanceof Controller) {
      this.controllers.pop(controller)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Removes multiple controllers from the entity.
   *
   * @see {@linkcode Entity#removeController} for removing a single controller.
   * @see {@linkcode Entity#addController} for adding a controller.
   *
   * @param {Controller[]} controllers The list of controllers to remove from the entity.
   * @throws {TypeError}
   */
  removeControllers (controllers) {
    if (controllers.every(controller => controller instanceof Controller)) {
      this.controllers.pop(...controllers)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Does actions before rendering. Must be called in order for {@linkcode Entity#render} to work properly.
   *
   * @see {@linkcode Entity#render}
   * @see {@linkcode Entity#postRender}
   *
   * @param {CanvasRenderingContext2D} ctx The rendering context to draw the entity.
   */
  preRender (ctx) {
    if (this.dirty) {
      ctx.clearRect(this.x, this.y, this.width, this.height)
    }
    this.ready = true
  }

  // ** TEMPORARY ** Edge drawing function for debugging
  drawEdges (ctx) {
    const edges = this.edges
    edges.forEach((edge, i) => {
      ctx.moveTo(edge.start.x, edge.start.y)
      ctx.lineTo(edge.end.x, edge.end.y)
    })
    ctx.stroke()
  }

  /**
   * Renders the entity. Relies on {@linkcode Entity#preRender} and {@linkcode Entity#postRender} to work properly.
   *
   * @see {@linkcode Entity#preRender}
   * @see {@linkcode Entity#postRender}
   *
   * @param  {CanvasRenderingContext2D} ctx The rendering context to draw the entity.
   */
  render (ctx) {
    if (this.ready && this.dirty && this.active) {
      // Draw using canvas context
      ctx.translate(this.x, this.y)
      ctx.rotate((Math.PI / 180) * this.rotation)
      ctx.translate(-this.x, -this.y)

      if (this.sprite === 'default') {
        ctx.fillStyle = this.color
        ctx.strokeStyle = '#000000'
        ctx.fillRect(
          this.x - this.width / 2,
          this.y - this.height / 2,
          this.width,
          this.height
        )
      } else {
        ctx.drawImage(
          this.sprite,
          this.x - this.width / 2,
          this.y - this.height / 2,
          this.width,
          this.height
        )
      }
      ctx.translate(this.x, this.y)
      ctx.rotate((Math.PI / 180) * -this.rotation)
      ctx.translate(-this.x, -this.y)
    }
  }

  /**
   * Does actions after rendering. Must be called in order for {@linkcode Entity#render} to work properly.
   *
   * @see {@linkcode Entity#render}
   * @see {@linkcode Entity#preRender}
   *
   * @param {CanvasRenderingContext2D} ctx The rendering context to draw the entity.
   */
  postRender () {
    this.ready = false
    this.dirty = false
  }
}

export default Entity
