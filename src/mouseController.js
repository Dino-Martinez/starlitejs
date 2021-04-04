import Controller from './controller.js'

class MouseController extends Controller {
  /**
   * Represents a callback for a {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent}
   *
   * @memberof MouseController
   * @callback mouseCallback
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent}
   * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
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
   * @param {(Element|Document|Window)} [element=document] The element that will listen for mouse events.
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
   * @param {mouseCallback} [ondrag=event => {}] The callback to be executed upon the drag event.
   * @param {mouseCallback} [ondragend=event => {}] The callback to be executed upon the dragend event.
   * @param {mouseCallback} [ondragenter=event => {}] The callback to be executed upon the dragenter event.
   * @param {mouseCallback} [ondragexit=event => {}] The callback to be executed upon the dragexit event.
   * @param {mouseCallback} [ondragleave=event => {}] The callback to be executed upon the dragleave event.
   * @param {mouseCallback} [ondragover=event => {}] The callback to be executed upon the dragover event.
   * @param {mouseCallback} [ondragstart=event => {}] The callback to be executed upon the dragstart event.
   * @param {mouseCallback} [ondrop=event => {}] The callback to be executed upon the drop event.
   */
  constructor (
    element = document, 
    onclick = event => {}, 
    oncontextmenu = event => {}, 
    ondblclick = event => {}, 
    onmousedown = event => {}, 
    onmouseenter = event => {}, 
    onmouseleave = event => {}, 
    onmousemove = event => {}, 
    onmouseout = event => {}, 
    onmouseover = event => {}, 
    onmouseup = event => {},
    ondrag = event => {},
    ondragend = event => {},
    ondragenter = event => {},
    ondragexit = event => {},
    ondragleave = event => {},
    ondragover = event => {},
    ondragstart = event => {},
    ondrop = event => {}
  ) {
    super()
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
    /**
     * Represents the callack to be executed upon the drag event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondrag = ondrag
    /**
     * Represents the callack to be executed upon the dragend event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondragend = ondragend
    /**
     * Represents the callack to be executed upon the dragenter event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondragenter = ondragenter
    /**
     * Represents the callack to be executed upon the dragexit event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondragexit = ondragexit
    /**
     * Represents the callack to be executed upon the dragleave event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondragleave = ondragleave
    /**
     * Represents the callack to be executed upon the dragover event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondragover = ondragover
    /**
     * Represents the callack to be executed upon the dragstart event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondragstart = ondragstart
    /**
     * Represents the callack to be executed upon the drop event.
     * 
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     * 
     * @type {mouseCallback}
     * @default event => {}
     */
    this.ondrop = ondrop
    if (element instanceof Element || element instanceof Document || element instanceof Window) {
      this._element = element
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
      this._element.ondrag = event => this.ondrag(event)
      this._element.ondragend = event => this.ondragend(event),
      this._element.ondragenter = event => this.ondragenter(event)
      this._element.ondragexit = event => this.ondragexit(event)
      this._element.ondragleave = event => this.ondragleave(event)
      this._element.ondragover = event => this.ondragover(event)
      this._element.ondragstart = event => this.ondragstart(event)
      this._element.ondrop = event => this.ondrop(event)
    } else {
      throw new TypeError()
    }
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
      this._element.ondrag = event => {}
      this._element.ondragend = event => {}
      this._element.ondragenter = event => {}
      this._element.ondragexit = event => {}
      this._element.ondragleave = event => {}
      this._element.ondragover = event => {}
      this._element.ondragstart = event => {}
      this._element.ondrop = event => {}
      this._element = newElement
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
      this._element.ondrag = event => this.ondrag(event)
      this._element.ondragend = event => this.ondragend(event),
      this._element.ondragenter = event => this.ondragenter(event)
      this._element.ondragexit = event => this.ondragexit(event)
      this._element.ondragleave = event => this.ondragleave(event)
      this._element.ondragover = event => this.ondragover(event)
      this._element.ondragstart = event => this.ondragstart(event)
      this._element.ondrop = event => this.ondrop(event)
    } else {
      throw new TypeError()
    }
  }
}

export default MouseController
