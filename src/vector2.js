export default class Vector2 {
    /**
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x=0, y=0) {
        this._x = x
        this._y = y
    }

    /**
     * @returns {number}
     */
    get x() {
        return this._x
    }

    /**
     * @returns {number}
     */
    get y() {
        return this._y
    }

    /**
     * @param {number} newX
     */
    set x(newX) {
        if (typeof newX == 'number') {
            this._x = newX
        } else {
            throw new TypeError()
        }
    }

    /**
     * @param {number} newY
     */
    set y(newY) {
        if (typeof newY == 'number') {
            this._y = newY
        } else {
            throw new TypeError()
        }
    }
}