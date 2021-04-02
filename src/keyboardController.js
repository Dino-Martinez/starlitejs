import Controller from './controller.js'

class KeyboardController extends Controller {
  /**
   * Represents a callback for a {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent|KeyboardEvent}
   *
   * @memberof KeyboardController
   * @callback keyboardCallback
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent|KeyboardEvent}
   *
   * @param {KeyboardEvent} event Information about the triggered event.
   */

  /**
   * Creates a keyboard controller.
   *
   * @class KeyboardController
   * @classdesc Class representing a keyboard controller.
   * @implements Controller
   *
   * @param {keyboardCallback} [keydown] The callback to be executed upon the keydown event.
   * @param {keyboardCallback} [keypress] The callback to be exectued upon the keypress event
   * @param {keyboardCallback} [keyup] The callback to be executed upon the keyup event.
   */
  constructor (keydown = event => {}, keypress = event => {}, keyup = event => {}) {
    super()
    this._keysDown = []
    /**
     * Represents the callback to be executed upon the keydown event.
     *
     * @type {keyboardCallback}
     * @default event => {}
     */
    this.keydown = keydown
    /**
     * Represents the callback to be executed upon the keypress event.
     *
     * @type {keyboardCallback}
     * @default event => {}
     */
    this.keypress = keypress
    /**
     * Represents the callback to be executed upon the keyup event.
     *
     * @type {keyboardCallback}
     * @default event => {}
     */
    this.keyup = keyup
    document.onkeydown = event => {
      if (!this.isKeyDown(event.key)) {
        this._keysDown.push(event.key)
      }
      this.keydown(event)
    }
    document.onkeypress = event => this.keypress(event)
    document.onkeyup = event => {
      if (this.isKeyDown(event.key)) {
        this._keysDown.pop(event.key)
      }
      this.keyup(event)
    }
  }

  isKeyDown(key) {
    return this._keysDown.includes(key)
  }

  get keysDown() {
    return this._keysDown
  }
}

export default KeyboardController
