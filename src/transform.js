import Vector2 from "./vector2.js"
export default class Transform {
    constructor() {
        this._position = new Vector2()
        this._rotation = 0
        this._scale = new Vector2()
    }

    /**
     * @returns {number}
     */
    get position() {
        return this._position
    }

    /**
     * @returns {number}
     */
    get rotation() {
        return this._rotation
    }

    /**
     * @returns {number}
     */
    get scale() {
        return this._scale
    }

    /**
     * @param {Vector2} newPosition
     */
    set position(newPosition) {
        if (newPosition instanceof Vector2) {
            this._position = newPosition
        } else {
            throw new TypeError()
        }
    }
    
    /**
     * @param {number} newRotation
     */
    set rotation(newRotation) {
        if (typeof newRotation == 'number') {
            this._rotation = newRotation % 360
        } else {
            throw new TypeError()
        }
    }

    /**
     * @param {Vector2} newScale
     */
    set scale(newScale) {
        if (newScale instanceof Vector2) {
            this._scale = newScale
        } else {
            throw new TypeError()
        }
    }

    /**
     * @param {Vector2} delta 
     */
    translate(delta) {
        if (delta instanceof Vector2) {
            this.position.x += delta.x
            this.position.y += delta.y
        } else {
            throw new TypeError()
        }
    }

    /**
     * @param {number} delta 
     */
    rotate(delta) {
        if (typeof delta == 'number') {
            this.rotation += delta
        } else {
            throw new TypeError()
        }
    }

    /**
     * @param {number} scalar
     */
    scalarScale(scalar) {
        if (typeof scalar == 'number') {
            this.scale.x *= scalar
            this.scale.y *= scalar
        } else {
            throw new TypeError()
        }
    }

    /**
     * @param {Vector2} vector
     */
    vectorScale(vector) {
        if (vector instanceof Vector2) {
            this.scale.x *= vector.x
            this.scale.y *= vector.y
        } else {
            throw new TypeError()
        }
    }
}