import Transform from './transform.js'

export default class Collider {
  constructor () {
    this.transform = new Transform()
  }

  /**
   * get x - Get the x component of this transform's position
   *
   * @returns {number} The x component of position
   */
  get x () {
    return this.transform.x
  }

  /**
   * get y - Get the y component of this transform's position
   *
   * @returns {number} The y component of position
   */
  get y () {
    return this.transform.y
  }

  get position () {
    return this.transform.position
  }

  /**
   * get width - Get the width of this transform
   *
   * @returns {number} The width
   */
  get width () {
    return this.transform.width
  }

  /**
   * get width - Get the height of this transform
   *
   * @returns {number} The height
   */
  get height () {
    return this.transform.height
  }

  /**
   * set x - Sets the x component of this transform's position
   *
   * @param {number} newX The new x component
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
   * @param {number} newY The new y component
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
   * checkCollision - Check collision between this collider and another collider
   *
   * @param {Collider} other The collider to check against
   *
   * @returns {boolean} True if there is a collision, false otherwise
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
   * collide - If this collider is colliding with another collider, call callback
   *
   * @param {Collider} other The other collider to check against
   * @param {function} callback The callback to execute upon a collision
   *
   * @returns {type} Description
   */
  collide (other, callback) {
    const collided = this.checkCollision(other)
    callback({ collided, other })
  }
}
