import { Transform } from './starlite-core.js'

// Helper function to check if two line segments (a,b) -> (c,d) and (p,q) -> (r,s) intersect
// In the future this should be put on the GPU for acceleration
const intersects = (a, b, c, d, p, q, r, s) => {
  let det, gamma, lambda
  det = (c - a) * (s - q) - (r - p) * (d - b)
  if (det === 0) {
    return false
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det
    return lambda > 0 && lambda < 1 && gamma > 0 && gamma < 1
  }
}

class Collider {
  /**
   * Represents a callback for a collision event.
   *
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
    let collided = false
    const thisEdges = this.transform.edges
    const otherEdges = other.transform.edges
    let collidedEdge = {}

    // Check all line segments, if any from this collide with any from other, then we have a collision
    thisEdges.forEach((edge1, i) => {
      otherEdges.forEach((edge2, j) => {
        if (
          intersects(
            edge1.start.x,
            edge1.start.y,
            edge1.end.x,
            edge1.end.y,
            edge2.start.x,
            edge2.start.y,
            edge2.end.x,
            edge2.end.y
          )
        ) {
          collided = true
          collidedEdge = edge2
        }
      })
    })
    return { collided, collidedEdge }
  }

  /**
   * Checks collision with another collider and executes a given callback.
   *
   * @param {Collider} other The other collider.
   * @param {collisionCallback} callback The callback to be executed upon collision.
   */
  collide (other, callback) {
    const { collided, collidedEdge } = this.checkCollision(other)
    const args = {
      collided,
      collidedEdge,
      other
    }
    callback(args)
  }
}

export default Collider
