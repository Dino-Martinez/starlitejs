import Controller from './controller.js'

class MouseController extends Controller {
  /**
   * Represents a callback for a {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent}
   *
   * @memberof MouseController
   * @callback mouseCallback
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent}
   *
   * @param {MouseEvent} event Information about the triggered event.
   */

  /**
   * Creates a mouse controller.
   *
   * @class MouseController
   * @classdesc Class representing a keyboard controller.
   * @implements Controller
   *
   * @param {(Element|Document)} [element=document] The element that will listen for mouse events.
   * @param {mouseCallback} [onauxclick=event => {}] The callback to be executed upon the auxclick event.
   * @param {mouseCallback} [onclick=event => {}] The callback to be executed upon the click event.
   * @param {mouseCallback} [oncontextmenu=event => {}] The callback to be executed upon the contextmenu event.
   * @param {mouseCallback} [ondblclick=event => {}] The callback to be executed upon the dblclick event.
   * @param {mouseCallback} [onmousedown=event => {}] The callback to be executed upon the mousedown event.
   * @param {mouseCallback} [onmouseenter=event => {}] The callback to be executed upon the mouseenter event.
   * @param {mouseCallback} [onmouseleave=event => {}] The callback to be executed upon the mouseleave event.
   * @param {mouseCallback} [onmousemove=event => {}] The callback to be executed upon the mousemove event.
   * @param {mouseCallback} [onmouseout=event => {}] The callback to be executed upon the mouseout event.
   * @param {mouseCallback} [onmouseover=event => {}] The callback to be executed upon the mouseover event.
   * @param {mouseCallback} [onmouseup=event => {}] The callback to be executed upon the mouseup event.
   */
  constructor (element = document, onauxclick = event => {}, onclick = event => {}, oncontextmenu = event => {}, ondblclick = event => {}, onmousedown = event => {}, onmouseenter = event => {}, onmouseleave = event => {}, onmousemove = event => {}, onmouseout = event => {}, onmouseover = event => {}, onmouseup = event => {}) {
    super()
    /**
     * Represents the callback to be executed upon the auxclick event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onauxclick = onauxclick
    /**
     * Represents the callback to be executed upon the click event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onclick = onclick
    /**
     * Represents the callback to be executed upon the contextmenu event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.oncontextmenu = oncontextmenu
    /**
     * Represents the callback to be executed upon the dblclick event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondblclick = ondblclick
    /**
     * Represents the callback to be executed upon the mousedown event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmousedown = onmousedown
    /**
     * Represents the callback to be executed upon the mouseenter event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmouseenter = onmouseenter
    /**
     * Represents the callback to be executed upon the mouseleave event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmouseleave = onmouseleave
    /**
     * Represents the callback to be executed upon the mousemove event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmousemove = onmousemove
    /**
     * Represents the callback to be executed upon the mouseout event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmouseout = onmouseout
    /**
     * Represents the callback to be executed upon the mouseover event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmouseover = onmouseover
    /**
     * Represents the callback to be executed upon the mouseup event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.onmouseup = onmouseup
    if (element instanceof Element || element instanceof Document) {
      this._element = element
      this._element.onauxclick = event => this.onauxclick(event)
      this._element.onclick = event => this.onclick(event)
      this._element.oncontextmenu = event => this.oncontextmenu(event)
      this._element.ondblclick = event => this.ondblclick(event)
      this._element.onmousedown = event => this.onmousedown(event)
      this._element.onmouseenter = event => this.onmouseenter(event)
      this._element.onmouseleave = event => this.onmouseleave(event)
      this._element.onmousemove = event => this.onmousemove(event)
      this._element.onmouseout = event => this.onmouseout(event)
      this._element.onmouseover = event => this.onmouseover(event)
      this._element.onmouseup = event => this.onmouseup(event)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Represents the element that will listen for mouse events.
   *
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/Element|Element}
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/Document|Document}
   *
   * @type {(Element|Document)}
   * @default document
   */
  get element () {
    return this._element
  }

  set element (newElement) {
    if (newElement instanceof Element || newElement instanceof Document) {
      this._element.onauxclick = event => {}
      this._element.onclick = event => {}
      this._element.oncontextmenu = event => {}
      this._element.ondblclick = event => {}
      this._element.onmousedown = event => {}
      this._element.onmouseenter = event => {}
      this._element.onmouseleave = event => {}
      this._element.onmousemove = event => {}
      this._element.onmouseout = event => {}
      this._element.onmouseover = event => {}
      this._element.onmouseup = event => {}
      this._element = newElement
      this._element.onauxclick = event => this.onauxclick(event)
      this._element.onclick = event => this.onclick(event)
      this._element.oncontextmenu = event => this.oncontextmenu(event)
      this._element.ondblclick = event => this.ondblclick(event)
      this._element.onmousedown = event => this.onmousedown(event)
      this._element.onmouseenter = event => this.onmouseenter(event)
      this._element.onmouseleave = event => this.onmouseleave(event)
      this._element.onmousemove = event => this.onmousemove(event)
      this._element.onmouseout = event => this.onmouseout(event)
      this._element.onmouseover = event => this.onmouseover(event)
      this._element.onmouseup = event => this.onmouseup(event)
    } else {
      throw new TypeError()
    }
  }
}

export default MouseController
