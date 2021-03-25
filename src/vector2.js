export default class Vector2 {
  static zero = new Vector2(0, 0)
  static one = new Vector2(1, 1)
  static up = new Vector2(0, 1)
  static right = new Vector2(1, 0)
  static down = new Vector2(0, -1)
  static left = new Vector2(-1, 0)

  /**
   * @param {number} x
   * @param {number} y
   */
  constructor (x = 0, y = 0) {
    this._x = x
    this._y = y
  }

  /**
   * @returns {number}
   */
  get x () {
    return this._x
  }

  /**
   * @returns {number}
   */
  get y () {
    return this._y
  }

  /**
   * @returns {number}
   */
  get magnitude () {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  /**
   * @returns {number}
   */
  get direction () {
    return (Math.PI * 180) * Math.atan(this.y / this.x)
  }

  /**
   * @returns {Vector2}
   */
  get normal () {
    return new Vector2(this.x, this.y).scale(1 / this.magnitude)
  }

  /**
   * @returns {Vector2}
   */
  get inverse () {
    return new Vector2(this.y, this.x)
  }

  /**
   * @param {number} newX
   */
  set x (newX) {
    if (typeof newX === 'number') {
      this._x = newX
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {number} newY
   */
  set y (newY) {
    if (typeof newY === 'number') {
      this._y = newY
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Vector2} other
   */
  distance (other) {
    if (other instanceof Vector2) {
      return new Vector2().magnitude
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Vector2} other
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
   * @param {Vector2} other
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
   * @param {Vector2} other
   */
  dot (other) {
    if (other instanceof Vector2) {
      this.x *= other.x
      this.y *= other.y
    }
  }

  /**
   * @param {number} factor
   */
  scale (factor) {
    if (typeof factor === 'number') {
      this.x *= factor
      this.y *= factor
    } else {
      throw new TypeError()
    }
  }
}
