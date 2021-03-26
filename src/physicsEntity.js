import Entity from './entity.js'
import Collider from './collider.js'
import Vector2 from './vector2.js'

export default class PhysicsEntity extends Entity {
  /**
   * @param {string} [sprite=default] The Sprite image source
   * @param {number} [priority=0]     The z-index priority level of this entity
   * @param {number} [mass=1]         The mass of this entity, used for physics calculations
   * @param {object} [freeze={}]      An object of shape {x: boolean, y:boolean} specifying if either axis is 'frozen'
   *
   */
  constructor (
    sprite = 'default',
    priority = 0,
    mass = 1,
    freeze = { x: false, y: false }
  ) {
    super(sprite, priority)
    this.collider = new Collider()
    this.mass = mass
    this.freeze = freeze
    this._velocity = new Vector2(0, 0)
    this._acceleration = new Vector2(0, 0)
  }

  /**
   * get x - Get the x component of this transform's position
   *
   * @returns {number} The x component of position
   */
  get x () {
    return super.x
  }

  /**
   * get y - Get the y component of this transform's position
   *
   * @returns {number} The y component of position
   */
  get y () {
    return super.y
  }

  /**
   * get velocity - Returns the velocity vector of this entity
   */
  get velocity () {
    return this._velocity
  }

  /**
   * get acceleration - Returns the acceleration vector of this entity
   */
  get acceleration () {
    return this._acceleration
  }

  /**
   * get scale - Get the value for this transform's scale
   *
   * @return {number} The value for this transform's scale
   */
  get scale () {
    return super.scale
  }

  /**
   * set x - Sets the x component of this transform's position
   *
   * @param  {number} newX The new x component
   */
  set x (newX) {
    super.x = newX
    try {
      this.collider.x = newX
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
    super.y = newY
    try {
      this.collider.y = newY
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * set size - Sets the size of this transform to the given vector
   *
   * @param  {Vector2} newSize The vector {width, height}
   */
  set scale (newSize) {
    super.scale = newSize
    try {
      this.collider.transform.vectorScale(newSize)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * handleCollision - the callback function to be performed on this, should a collision exist
   *
   * @param {Object} result An object containing {collided: boolean, other: collider}
   */
  handleCollision = result => {
    if (result.collided) {
      this.velocity.scale(-1)
    }
  }

  /**
   * collide - If another entity collides with this entity, handle that collision
   *
   * @param {PhysicsEntity} other The other entity to check collision against
   */
  collide (other) {
    this.collider.collide(other.collider, this.handleCollision)
  }

  /**
   * update - Updates this entity's state based on implicit Euler's method
   *
   */
  update () {
    if (this) {
      this.velocity.add(this.acceleration)
      this.position.add(this.velocity)
      this.collider.position.add(this.velocity)
      this.dirty = true
    }
  }

  /**
   * applyForce - Applies a force to this entity to update acceleration
   *
   * @param {Vector2} force The force vector to apply
   */
  applyForce (force) {
    force.scale(this.mass)
    this.acceleration.add(force)
  }

  /**
   * preRender - Extends the Entity pre render to add the physics check and canvas clearing
   *
   * @param {CanvasRenderingContext2D} ctx the canvas context used to draw
   */
  preRender (ctx) {
    // Do Physics stuff
    ctx.clearRect(this.x, this.y, this.width, this.height)

    this.update()

    super.preRender(ctx)
  }
}
