import Controller from './controller.js'

class KeyboardController extends Controller {
  /**
   * @memberof KeyboardController
   * @callback keyboardCallback
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
    document.onkeydown = event => this.keydown(event)
    document.onkeypress = event => this.keypress(event)
    document.onkeyup = event => this.keyup(event)
  }
}

export default KeyboardController
