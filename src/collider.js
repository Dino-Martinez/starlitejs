import Transform from './transform.js'

class Collider {
  /**
   * @callback collisionCallback
   * @memberof Collider
   * @param {boolean} collided Whether or not a collision has occurred.
   * @param {Collider} other The other collider of the collision.
   */

  /**
   * Creates a collider.
   *
   * @class Collider
   * @classdesc Class representing a collider.
   */
  constructor () {
    /**
     * Represents the transform of the collider.
     *
     * @type {Transform}
     */
    this.transform = new Transform()
  }

  /**
   * Represents the x component of the position of the collider.
   *
   * @type {number}
   */
  get x () {
    return this.transform.x
  }

  /**
   * Represents the y component of the position of the collider.
   *
   * @type {number}
   */
  get y () {
    return this.transform.y
  }

  /**
   * Represents the position of the collider.
   *
   * @type {Vector2}
   */
  get position () {
    return this.transform.position
  }

  /**
   * Represents the width of the collider in pixels.
   *
   * @type {number}
   */
  get width () {
    return this.transform.width
  }

  /**
   * Represents the height of the colldier in pixels.
   *
   * @type {number}
   */
  get height () {
    return this.transform.height
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

  /**
   * Checks collision with another collider.
   *
   * @param {Collider} other The other collider.
   * @returns {boolean} Whether or not a collision has occurred.
   */
  checkCollision (other) {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    )
  }

  /**
   * Checks collision with another collider and executes a given callback.
   *
   * @param {Collider} other The other collider.
   * @param {collisionCallback} callback The callback to be executed upon collision.
   */
  collide (other, callback) {
    const collided = this.checkCollision(other)
    const args = {
      collided,
      other
    }
    callback(args)
  }
}

export default Collider
