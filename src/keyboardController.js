import { Controller } from './starlite-core.js'

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
   * @param {keyboardCallback} [keydown=event => {}] The callback to be executed upon the keydown event.
   * @param {keyboardCallback} [keypress=event => {}] The callback to be exectued upon the keypress event
   * @param {keyboardCallback} [keyup=event => {}] The callback to be executed upon the keyup event.
   * @param {boolean} [norepeat=false] Whether or not the keyboard should allow automatically repeating key events.
   */
  constructor (
    norepeat = false,
    keydown = event => {},
    keypress = event => {},
    keyup = event => {}
  ) {
    super()
    this._type = 'keyboard'
    this._keysDown = {}
    /**
     * Represents whether or not the keyboard should allow automatically repeating key events.
     *
     * @type {boolean}
     * @default = false
     */
    this.norepeat = norepeat
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
        this._keysDown[event.key] = true
      }
      if (this.enabled && !(this.norepeat && event.repeat)) {
        this.keydown(event)
      }
    }
    document.onkeypress = event => {
      if (this.enabled && !(this.norepeat && event.repeat)) {
        this.keypress(event)
      }
    }
    document.onkeyup = event => {
      if (this.isKeyDown(event.key)) {
        this._keysDown[event.key] = false
      }
      if (this.enabled && !(this.norepeat && event.repeat)) {
        this.keyup(event)
      }
    }
  }

  isKeyDown (key) {
    return this._keysDown[key]
  }

  get keysDown () {
    const trueKeys = []
    Object.keys(this._keysDown).forEach(key => {
      if (this._keysDown[key]) {
        trueKeys.push(key)
      }
    })
    return trueKeys
  }
}

export default KeyboardController
