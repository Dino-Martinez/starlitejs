import Controller from './controller.js'

class TouchController extends Controller {
  /**
   * Represents a callback for a {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent|TouchEvent}
   *
   * @memberof TouchController
   * @callback touchCallback
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent|TouchEvent}
   *
   * @param {TouchEvent} event Information about the triggered event.
   */

  /**
   * Creates a touch controller.
   *
   * @class TouchController
   * @classdesc Class representing a touch controller.
   * @implements Controller
   *
   * @param {(Element|Document|Window)} [element=document] The element that will listen for touch events.
   * @param {touchCallback} [ontouchstart=event => {}] The callback to be executed upon the touchstart event.
   * @param {touchCallback} [ontouchend=event => {}] The callback to be executed upon the touchend event.
   * @param {touchCallback} [ontouchmove=event => {}] The callback to be executed upon the touchmove event.
   * @param {touchCallback} [ontouchcancel=event => {}] The callback to be executed upon the touchcancel event.
   */
  constructor (
    element = document,
    ontouchstart = event => {},
    ontouchend = event => {},
    ontouchmove = event => {},
    ontouchcancel = event => {}
  ) {
    super()
    this._type = 'touch'
    this._element = element
    this._touches = []
    this._targetTouches = []
    /**
     * Represents the callback to be executed upon the touchstart event.
     *
     * @type {touchCallback}
     * @default event => {}
     */
    this.ontouchstart = ontouchstart
    /**
     * Represents the callback to be executed upon the touchend event.
     *
     * @type {touchCallback}
     * @default event => {}
     */
    this.ontouchend = ontouchend
    /**
     * Represents the callback to be executed upon the touchmove event.
     *
     * @type {touchCallback}
     * @default event => {}
     */
    this.ontouchmove = ontouchmove
    /**
     * Represents the callback to be executed upon the touchcancel event.
     *
     * @type {touchCallback}
     * @default event => {}
     */
    this.ontouchcancel = ontouchcancel
    this.element = element
    // if (element instanceof Element || element instanceof Document || element instanceof Window) {
    //   this._element = element
    //   this._element.ontouchstart = event => {
    //     if (this.enabled) {
    //       this.ontouchstart(event)
    //     }
    //   }
    //   this._element.ontouchend = event => {
    //     if (this.enabled) {
    //       this.ontouchend(event)
    //     }
    //   }
    //   this._element.ontouchmove = event => {
    //     if (this.enabled) {
    //       this.ontouchmove(event)
    //     }
    //   }
    //   this._element.ontouchcancel = event => {
    //     if (this.enabled) {
    //       this.ontouchcancel(event)
    //     }
    //   }
    // } else {
    //   throw new TypeError()
    // }
  }

  /**
   * Represents the element that will listen for mouse events.
   *
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/Element|Element}
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/Document|Document}
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/Window|Window}
   *
   * @type {(Element|Document|Window)}
   * @default document
   */
  get element () {
    return this._element
  }

  set element (newElement) {
    if (newElement instanceof Element || newElement instanceof Document || newElement instanceof Window) {
      this._element.ontouchstart = event => {}
      this._element.ontouchend = event => {}
      this._element.ontouchmove = event => {}
      this._element.ontouchcancel = event => {}
      this._element = newElement
      this._element.ontouchstart = event => {
        this._touches = event.touches
        this._targetTouches = event.targetTouches
        if (this.enabled) {
          this.ontouchstart(event)
        }
      }
      this._element.ontouchend = event => {
        this._touches = event.touches
        this._targetTouches = event.targetTouches
        if (this.enabled) {
          this.ontouchend(event)
        }
      }
      this._element.ontouchmove = event => {
        this._touches = event.touches
        this._targetTouches = event.targetTouches
        if (this.enabled) {
          this.ontouchmove(event)
        }
      }
      this._element.ontouchcancel = event => {
        this._touches = event.touches
        this._targetTouches = event.targetTouches
        if (this.enabled) {
          this.ontouchcancel(event)
        }
      }
    } else {
      throw new TypeError()
    }
  }

  /**
   * Represents all touches from the last touch event.
   *
   * @type {(TouchList|Touch[])}
   */
  get touches () {
    return this._touches
  }

  /**
   * Represents all touches from the last touch event on the target element.
   *
   * @type {(TouchList|Touch[])}
   */
  get targetTouches () {
    return this._targetTouches
  }
}

export default TouchController
