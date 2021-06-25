class Controller {
  /**
   * @interface Controller
   * @classdesc Interface for classes that represent a controller.
   */
  constructor () {
    /**
     * Represents whether or note the controller is enabled.
     *
     * @type {boolean}
     * @default true
     */
    this._type = 'generic'
    this.enabled = true
  }

  /**
   * Represents the type of the controller.
   *
   * @type {string}
   */
  get type () {
    return this._type
  }
}

export default Controller
