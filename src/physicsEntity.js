import Entity from './entity.js'
import Collider from './collider.js'
import Vector2 from './vector2.js'

class PhysicsEntity extends Entity {
  /**
   * Creates an entity with physics.
   *
   * @class PhysicsEntity
   * @classdesc Class representing an entity with physics.
   * @extends Entity
   *
   * @param {string} [sprite=default] The URL of the image to be rendered with the entity.
   * @param {number} [priority=0] The canvas draw priority (z-index)].
   * @param {number} [mass=1] The mass of the entity.
   * @param {Object} [freeze={ x: false, y: false }] The axes that are frozen/unaffected by physics.
   */
  constructor (
    sprite = 'default',
    priority = 0,
    mass = 1,
    freeze = { x: false, y: false }
  ) {
    super(sprite, priority)
    /**
     * Represents the collider of the entity.
     *
     * @type {Collider}
     */
    this.collider = new Collider()
    /**
     * Represents the mass of the entity.
     *
     * @type {number}
     * @default 1
     */
    this.mass = mass
    /**
     * Represents the frozen axes of the entity.
     *
     * @type {Object}
     * @default { x: false, y: false }
     */
    this.freeze = freeze
    this._velocity = new Vector2(0, 0)
    this._acceleration = new Vector2(0, 0)
  }

  /**
   * Represents the x component of the position of the entity.
   *
   * @type {number}
   */
  get x () {
    return super.x
  }

  /**
   * Represents the y component of the position of the entity.
   *
   * @type {number}
   */
  get y () {
    return super.y
  }

  /**
   * Represents the velocity of the entity.
   *
   * @type {Vector2}
   * @readonly
   */
  get velocity () {
    return this._velocity
  }

  /**
   * Represents the acceleration of the entity.
   *
   * @type {Vector2}
   * @readonly
   */
  get acceleration () {
    return this._acceleration
  }

  /**
   * Represents the size of the entity.
   *
   * @type {Vector2}
   */
  get scale () {
    return super.scale
  }

  get rotation () {
    return this.transform.rotation
  }

  set x (newX) {
    super.x = newX
    try {
      this.collider.x = newX
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  set y (newY) {
    super.y = newY
    try {
      this.collider.y = newY
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  set scale (newSize) {
    super.scale = newSize
    try {
      this.collider.transform.vectorScale(newSize)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  set rotation (newRot) {
    super.rotation = newRot
    try {
      this.collider.transform.rotation = newRot
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  /**
   * Does actions upon collision. Used as a callback for {@linkcode PhysicsEntity#collide}.
   *
   * @memberof PhysicsEntity
   * @function handleCollision
   * @instance
   *
   * @param {Object} result An object containing {collided: boolean, other: collider}.
   * @see {@linkcode PhysicsEntity#collide}
   */
  handleCollision = result => {
    if (result.collided) {
      this.velocity.scale(-1)
      this.position.add(this.velocity)
      this.collider.position.add(this.velocity)
      this.dirty = true
    }
  }

  /**
   * Provides very basic keyboard controls for player movement. Used as a callback for {@linkcode KeyboardController#keyup} and {@linkcode KeyboardController#keydown}.
   *
   * @memberof PhysicsEntity
   * @function movement
   * @instance
   *
   * @param {Object} event A KeyboardEvent containing type = keyup | keydown.
   */
  movement = event => {
    if (event.type === 'keydown') {
      if (event.key === 'w') {
        this.velocity.y = -4
      }
      if (event.key === 'a') {
        this.velocity.x = -4
      }
      if (event.key === 's') {
        this.velocity.y = 4
      }
      if (event.key === 'd') {
        this.velocity.x = 4
      }
    }
    if (event.type === 'keyup') {
      if (event.key === 'w') {
        this.velocity.y = 0
      }
      if (event.key === 'a') {
        this.velocity.x = 0
      }
      if (event.key === 's') {
        this.velocity.y = 0
      }
      if (event.key === 'd') {
        this.velocity.x = 0
      }
    }
  }

  /**
   * Checks collision with another entity.
   *
   * @param {PhysicsEntity} other The other entity.
   */
  collide (other) {
    this.collider.collide(other.collider, this.handleCollision)
  }

  /**
   * Updates the physics of the entity. Called in {@linkcode PhysicsEntity#preRender}.
   *
   * @see {@linkcode PhysicsEntity#preRender}
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
   * Applies a force to the entity.
   *
   * @param {Vector2} force The force to be applied to the entity.
   */
  applyForce (force) {
    force.scale(this.mass)
    this.acceleration.add(force)
  }

  /**
   * @override
   */
  preRender (ctx) {
    // Do Physics stuff
    ctx.translate(this.x, this.y)
    ctx.rotate((Math.PI / 180) * this.rotation)
    ctx.translate(-this.x, -this.y)

    ctx.clearRect(
      this.x - 5 - Math.ceil(this.width / 2),
      this.y - 5 - Math.ceil(this.height / 2),
      this.width + 10,
      this.height + 10
    )

    ctx.translate(this.x, this.y)
    ctx.rotate((Math.PI / 180) * -this.rotation)
    ctx.translate(-this.x, -this.y)

    this.update()

    super.preRender(ctx)
  }
}

export default PhysicsEntity
