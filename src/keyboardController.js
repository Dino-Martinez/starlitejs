import Controller from './controller.js'

export default class KeyboardController extends Controller {
  /**
   * @callback keyboardCallback
   * @param {KeyboardEvent} event
   */

  /**
   * @param {keyboardCallback} keydown
   * @param {keyboardCallback} keypress
   * @param {keyboardCallback} keyup
   */
  constructor (keydown = event => {}, keypress = event => {}, keyup = event => {}) {
    super()
    this.keydown = keydown
    this.keypress = keypress
    this.keyup = keyup
    document.onkeydown = event => this.keydown(event)
    document.onkeypress = event => this.keypress(event)
    document.onkeyup = event => this.keyup(event)
  }
}
