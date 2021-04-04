class Vector2 {
  /**
   * Represents a vector with x component of 0 and y component of 0
   *
   * @memberof Vector2
   *
   * @type {Vector2}
   */
  static zero = new Vector2(0, 0)
  /**
   * Represents a vector with x component of 1 and y component of 1
   *
   * @memberof Vector2
   *
   * @type {Vector2}
   */
  static one = new Vector2(1, 1)
  /**
   * Represents a vector with x component of 0 and y component of 1
   *
   * @memberof Vector2
   *
   * @type {Vector2}
   */
  static up = new Vector2(0, 1)
  /**
   * Represents a vector with x component of 1 and y component of 0
   *
   * @memberof Vector2
   *
   * @type {Vector2}
   */
  static right = new Vector2(1, 0)
  /**
   * Represents a vector with x component of 0 and y component of -1
   *
   * @memberof Vector2
   *
   * @type {Vector2}
   */
  static down = new Vector2(0, -1)
  /**
   * Represents a vector with x component of -1 and y component of 0
   *
   * @memberof Vector2
   *
   * @type {Vector2}
   */
  static left = new Vector2(-1, 0)

  static distance (a, b) {
    if (a instanceof Vector2 && b instanceof Vector2) {
      return new Vector2(b.x - a.x, b.y - a.y).magnitude
    } else {
      throw new TypeError()
    }
  }

  static add (a, b) {
    if (a instanceof Vector2 && b instanceof Vector2) {
      return new Vector2(a.x + b.x, a.y + b.y)
    } else {
      throw new TypeError()
    }
  }

  static subtract (a, b) {
    if (a instanceof Vector2 && b instanceof Vector2) {
      return new Vector2(a.x - b.x, a.y - b.y)
    } else {
      throw new TypeError()
    }
  }

  static dot (a, b) {
    if (a instanceof Vector2 && b instanceof Vector2) {
      return new Vector2(a.x * b.x, a.y * b.y)
    } else {
      throw new TypeError()
    }
  }

  static scale (vector, scalar) {
    if (vector instanceof Vector2 && typeof scalar == 'number') {
      return new Vector2(vector.x * scalar, vector.y * scalar)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Creates a vector with 2 components.
   *
   * @class Vector2
   * @classdesc Class representing a vector with 2 components.
   *
   * @param {number} [x=0] The x component of the vector.
   * @param {number} [y=0] The y component of the vector.
   */
  constructor (x = 0, y = 0) {
    this._x = x
    this._y = y
  }

  /**
   * Represents the x component of the vector.
   *
   * @type {number}
   */
  get x () {
    return this._x
  }

  /**
   * Represents the y component of the vector.
   *
   * @type {number}
   */
  get y () {
    return this._y
  }

  /**
   * Represents the magnitude of the vector.
   *
   * @type {number}
   * @readonly
   */
  get magnitude () {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  /**
   * Represents the direction of the vector in degrees.
   *
   * @type {number}
   * @readonly
   */
  get direction () {
    return Math.PI * 180 * Math.atan(this.y / this.x)
  }

  /**
   * Represents the unit of the vector.
   *
   * @type {Vector2}
   * @readonly
   */
  get unit () {
    return new Vector2(this.x, this.y).scale(1 / this.magnitude)
  }

  /**
   * Represents the inverse of the vector.
   *
   * @type {Vector2}
   * @readonly
   */
  get inverse () {
    return new Vector2(this.y, this.x)
  }

  set x (newX) {
    if (typeof newX === 'number') {
      this._x = newX
    } else {
      throw new TypeError()
    }
  }

  set y (newY) {
    if (typeof newY === 'number') {
      this._y = newY
    } else {
      throw new TypeError()
    }
  }

  /**
   * Calculates the distance between the vector and another vector.
   *
   * @param {Vector2} other The other vector.
   * @throws {TypeError}
   */
  distance (other) {
    if (other instanceof Vector2) {
      return new Vector2(this.x - other.x, this.y - other.y).magnitude
    } else {
      throw new TypeError()
    }
  }

  /**
   * Adds to the components of the vector given another vector.
   *
   * @param {Vector2} other The other vector.
   * @throws {TypeError}
   */
  add (other) {
    if (other instanceof Vector2) {
      this.x += other.x
      this.y += other.y
    } else {
      throw new TypeError()
    }
  }

  /**
   * Subtracts the components of the vector given another vector.
   *
   * @param {Vector2} other The other vector.
   * @throws {TypeError}
   */
  subtract (other) {
    if (other instanceof Vector2) {
      this.x -= other.x
      this.y -= other.y
    } else {
      throw new TypeError()
    }
  }

  /**
   * Multiplies the components of the vector given another vector.
   *
   * @param {Vector2} other The other vector.
   */
  dot (other) {
    if (other instanceof Vector2) {
      this.x *= other.x
      this.y *= other.y
    }
  }

  /**
   * Scales the components of the vector given a scalar factor.
   *
   * @param {number} factor The scale factor.
   * @throws {TypeError}
   */
  scale (factor) {
    if (typeof factor === 'number') {
      this.x *= factor
      this.y *= factor
    } else {
      throw new TypeError()
    }
  }

  rotate (angle) {
    const newX = this.x * Math.cos(angle) - this.y * Math.sin(angle)
    const newY = this.x * Math.sin(angle) + this.y * Math.cos(angle)
    if (newX === newX && newY === newY) {
      this.x = newX
      this.y = newY
    }
  }
}

export default Vector2
