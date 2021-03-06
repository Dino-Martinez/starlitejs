import { Vector2 } from './starlite-core.js'

class Transform {
  /**
   * Creates a transform.
   *
   * @class Transform
   * @classdesc Class representing a transform.
   */
  constructor () {
    this._position = new Vector2()
    this._rotation = 0
    this._scale = new Vector2(1, 1)
  }

  /**
   * Represents the x component of the position vector of the transform.
   *
   * @type {number}
   */
  get x () {
    return this.position.x
  }

  /**
   * Represents the y component of the position vector of the transform.
   *
   * @type {number}
   */
  get y () {
    return this.position.y
  }

  /**
   * Represents the x component of the scale vector of the transform.
   *
   * @type {number}
   */
  get width () {
    return this.scale.x
  }

  /**
   * Represents the y component of the scale vector of the transform.
   *
   * @type {number}
   */
  get height () {
    return this.scale.y
  }

  /**
   * Represents the position vector of the transform.
   *
   * @type {Vector2}
   */
  get position () {
    return this._position
  }

  /**
   * Represents the rotation of the transform.
   *
   * @type {number}
   * @default 0
   */
  get rotation () {
    return this._rotation
  }

  /**
   * Represents the scale vector of the transform.
   *
   * @type {number}
   */
  get scale () {
    return this._scale
  }

  /**
   * Represents the edges of the transform as a rectangle.
   *
   * @type {Object}
   */
  get edges () {
    const rotation = (Math.PI / 180) * this.rotation
    const x =
      this.x +
      (this.width / 2) * Math.cos(rotation) -
      (this.height / 2) * Math.sin(rotation)
    const y =
      this.y +
      (this.width / 2) * Math.sin(rotation) +
      (this.height / 2) * Math.cos(rotation)

    const x1 =
      this.x -
      (this.width / 2) * Math.cos(rotation) -
      (this.height / 2) * Math.sin(rotation)
    const y1 =
      this.y -
      (this.width / 2) * Math.sin(rotation) +
      (this.height / 2) * Math.cos(rotation)

    const x2 =
      this.x -
      (this.width / 2) * Math.cos(rotation) +
      (this.height / 2) * Math.sin(rotation)
    const y2 =
      this.y -
      (this.width / 2) * Math.sin(rotation) -
      (this.height / 2) * Math.cos(rotation)

    const x3 =
      this.x +
      (this.width / 2) * Math.cos(rotation) +
      (this.height / 2) * Math.sin(rotation)
    const y3 =
      this.y +
      (this.width / 2) * Math.sin(rotation) -
      (this.height / 2) * Math.cos(rotation)

    return [
      {
        start: {
          x,
          y
        },
        end: {
          x: x1,
          y: y1
        }
      },
      {
        start: {
          x: x1,
          y: y1
        },
        end: {
          x: x2,
          y: y2
        }
      },
      {
        start: {
          x: x2,
          y: y2
        },
        end: {
          x: x3,
          y: y3
        }
      },
      {
        start: {
          x: x3,
          y: y3
        },
        end: {
          x,
          y
        }
      }
    ]
  }

  set x (newX) {
    if (typeof newX === 'number') {
      this.position = new Vector2(newX, this.position.y)
    } else {
      throw new TypeError()
    }
  }

  set y (newY) {
    if (typeof newY === 'number') {
      this.position = new Vector2(this.position.x, newY)
    } else {
      throw new TypeError()
    }
  }

  set width (newX) {
    if (typeof newX === 'number') {
      this.scale = new Vector2(newX, this.scale.y)
    } else {
      throw new TypeError()
    }
  }

  set height (newY) {
    if (typeof newY === 'number') {
      this.scale = new Vector2(newY, this.scale.y)
    } else {
      throw new TypeError()
    }
  }

  set position (newPosition) {
    if (newPosition instanceof Vector2) {
      this._position = new Vector2(newPosition.x, newPosition.y)
    } else {
      throw new TypeError()
    }
  }

  set rotation (newRotation) {
    if (typeof newRotation === 'number') {
      this._rotation = newRotation % 360
    } else {
      throw new TypeError()
    }
  }

  set scale (newScale) {
    if (newScale instanceof Vector2) {
      this._scale = new Vector2(newScale.x, newScale.y)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Changes the position vector of the transform by a given delta vector (adds components).
   *
   * @param {Vector2} delta The vector by which to change the position.
   * @throws {TypeError}
   */
  translate (delta) {
    if (delta instanceof Vector2) {
      this.position.x += delta.x
      this.position.y += delta.y
    } else {
      throw new TypeError()
    }
  }

  /**
   * Changes the rotation scalar of the tranform by a given delta scalar (adds).
   *
   * @param {number} delta The scalar by which to change the rotation.
   * @throws {TypeError}
   */
  rotate (delta, radians = false) {
    if (typeof delta === 'number') {
      if (radians) delta *= 180 / Math.PI
      this.rotation += delta
    } else {
      throw new TypeError()
    }
  }

  /**
   * Changes the scale vector of the transform by a given delta scalar (multiplies components).
   *
   * @param {number} scalar The scalar by which to change the scale.
   */
  scalarScale (scalar) {
    try {
      this.scale.scale(scalar)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Changes the scale vector of the transform by a given delta vector (multiplies components).
   *
   * @param {Vector2} vector The vector by which to change the scale.
   */
  vectorScale (vector) {
    try {
      this.scale.dot(vector)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Calculates the distance between the transform and another transform.
   *
   * @param {Transform} other The other transform.
   * @returns {number}
   * @throws {TypeError}
   */
  distance (other) {
    if (other instanceof Transform) {
      return this.position.distance(other.position)
    } else {
      throw TypeError()
    }
  }
}

export default Transform
