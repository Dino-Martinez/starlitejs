import { Entity, Collider, Vector2 } from './starlite-core.js'

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
    freeze = { x: false, y: false },
    playerNum = 1
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
    this.playerNum = playerNum
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

  set velocity (newV) {
    try {
      this._velocity = newV
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
    const { collided, collidedEdge, other } = result
    if (collided) {
      // Courtesy of https://stackoverflow.com/questions/42159032/how-to-find-angle-between-two-straight-lines-paths-on-a-svg-in-javascript
      const dAx = collidedEdge.start.x - collidedEdge.end.x
      const dAy = collidedEdge.start.y - collidedEdge.end.y
      const dBx = this.velocity.x
      const dBy = this.velocity.y
      let angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy)
      if (angle < 0) {
        angle = angle * -1
      }

      this.velocity.rotate(angle * 2, true)

      // Move this to barely touch collided edge
      // Linear algebra concepts driven by my friend Violet :)
      const x1 = this.position.x
      const x2 = other.position.x
      const y1 = this.position.y
      const y2 = other.position.y
      const x3 = collidedEdge.start.x
      const x4 = collidedEdge.end.x
      const y3 = collidedEdge.start.y
      const y4 = collidedEdge.end.y
      const t =
        ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) /
        ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
      const px = x1 + t * (x2 - x1)
      const py = y1 + t * (y2 - y1)
      const ax = px - x2
      const ay = py - y2
      const distance = new Vector2(ax, ay)
      const adjustment = new Vector2(this.velocity.x, this.velocity.y)

      adjustment.scale(adjustment.magnitude / distance.magnitude)

      if (this.freeze.x) {
        adjustment.x = 0
      }

      if (this.freeze.y) {
        adjustment.y = 0
      }

      this.position.add(adjustment)
      this.collider.position.add(adjustment)

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
  movement (event) {
    const kb = this.controllers.find(
      controller => controller.type === 'keyboard'
    )
    if (this.playerNum === 1) {
      if (kb.isKeyDown('w')) {
        this.velocity.y = -4
      } else if (kb.isKeyDown('s')) {
        this.velocity.y = 4
      } else {
        this.velocity.y = 0
      }

      if (kb.isKeyDown('d')) {
        this.velocity.x = 4
      } else if (kb.isKeyDown('a')) {
        this.velocity.x = -4
      } else {
        this.velocity.x = 0
      }
    }
    if (this.playerNum === 2) {
      if (kb.isKeyDown('ArrowUp')) {
        this.velocity.y = -4
      } else if (kb.isKeyDown('ArrowDown')) {
        this.velocity.y = 4
      } else {
        this.velocity.y = 0
      }

      if (kb.isKeyDown('ArrowRight')) {
        this.velocity.x = 4
      } else if (kb.isKeyDown('ArrowLeft')) {
        this.velocity.x = -4
      } else {
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
      if (this.freeze.x) {
        this.velocity.x = 0
      }
      if (this.freeze.y) {
        this.velocity.y = 0
      }
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
   * Clears the entity from the screen.
   *
   * @param {CanvasRenderingContext2D} ctx The rendering context to clear the entity.
   */
  clear (ctx) {
    // Do Physics stuff
    ctx.translate(this.x, this.y)
    ctx.rotate((Math.PI / 180) * this.rotation)
    ctx.translate(-this.x, -this.y)

    ctx.clearRect(
      this.x - 10 - Math.ceil(this.width / 2),
      this.y - 10 - Math.ceil(this.height / 2),
      this.width + 20,
      this.height + 20
    )

    ctx.translate(this.x, this.y)
    ctx.rotate((Math.PI / 180) * -this.rotation)
    ctx.translate(-this.x, -this.y)
  }

  /**
   * @override
   */
  preRender (ctx) {
    this.clear(ctx)

    this.collider.x = this.x
    this.collider.y = this.y

    super.preRender(ctx)
  }
}

export default PhysicsEntity
