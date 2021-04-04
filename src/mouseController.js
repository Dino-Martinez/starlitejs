import Controller from './controller.js'
import Vector2 from './vector2.js'

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
   * @param {mouseCallback} [click=event => {}] The callback to be executed upon the click event.
   * @param {mouseCallback} [contextmenu=event => {}] The callback to be executed upon the contextmenu event.
   * @param {mouseCallback} [dblclick=event => {}] The callback to be executed upon the dblclick event.
   * @param {mouseCallback} [mousedown=event => {}] The callback to be executed upon the mousedown event.
   * @param {mouseCallback} [mouseenter=event => {}] The callback to be executed upon the mouseenter event.
   * @param {mouseCallback} [mouseleave=event => {}] The callback to be executed upon the mouseleave event.
   * @param {mouseCallback} [mousemove=event => {}] The callback to be executed upon the mousemove event.
   * @param {mouseCallback} [mouseout=event => {}] The callback to be executed upon the mouseout event.
   * @param {mouseCallback} [mouseover=event => {}] The callback to be executed upon the mouseover event.
   * @param {mouseCallback} [mouseup=event => {}] The callback to be executed upon the mouseup event.
   * @param {mouseCallback} [drag=event => {}] The callback to be executed upon the drag event.
   * @param {mouseCallback} [dragend=event => {}] The callback to be executed upon the dragend event.
   * @param {mouseCallback} [dragenter=event => {}] The callback to be executed upon the dragenter event.
   * @param {mouseCallback} [dragexit=event => {}] The callback to be executed upon the dragexit event.
   * @param {mouseCallback} [dragleave=event => {}] The callback to be executed upon the dragleave event.
   * @param {mouseCallback} [dragover=event => {}] The callback to be executed upon the dragover event.
   * @param {mouseCallback} [dragstart=event => {}] The callback to be executed upon the dragstart event.
   * @param {mouseCallback} [drop=event => {}] The callback to be executed upon the drop event.
   * @param {mouseCallback} [wheel=event => {}] The callback to be executed upon the wheel event.
   */
  constructor (
    element = document,
    click = event => {},
    contextmenu = event => {},
    dblclick = event => {},
    mousedown = event => {},
    mouseenter = event => {},
    mouseleave = event => {},
    mousemove = event => {},
    mouseout = event => {},
    mouseover = event => {},
    mouseup = event => {},
    drag = event => {},
    dragend = event => {},
    dragenter = event => {},
    dragexit = event => {},
    dragleave = event => {},
    dragover = event => {},
    dragstart = event => {},
    drop = event => {},
    wheel = event => {}
  ) {
    super()
    this._element = element
    this._type = 'mouse'
    this._position = new Vector2()
    this._lastPosition = new Vector2()
    this._velocity = new Vector2()
    /**
     * Represents the callback to be executed upon the click event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.click = click
    /**
     * Represents the callback to be executed upon the contextmenu event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.contextmenu = contextmenu
    /**
     * Represents the callback to be executed upon the dblclick event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dblclick = dblclick
    /**
     * Represents the callback to be executed upon the mousedown event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mousedown = mousedown
    /**
     * Represents the callback to be executed upon the mouseenter event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mouseenter = mouseenter
    /**
     * Represents the callback to be executed upon the mouseleave event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mouseleave = mouseleave
    /**
     * Represents the callback to be executed upon the mousemove event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mousemove = mousemove
    /**
     * Represents the callback to be executed upon the mouseout event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mouseout = mouseout
    /**
     * Represents the callback to be executed upon the mouseover event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mouseover = mouseover
    /**
     * Represents the callback to be executed upon the mouseup event.
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.mouseup = mouseup
    /**
     * Represents the callack to be executed upon the drag event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.drag = drag
    /**
     * Represents the callack to be executed upon the dragend event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dragend = dragend
    /**
     * Represents the callack to be executed upon the dragenter event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dragenter = dragenter
    /**
     * Represents the callack to be executed upon the dragexit event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dragexit = dragexit
    /**
     * Represents the callack to be executed upon the dragleave event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dragleave = dragleave
    /**
     * Represents the callack to be executed upon the dragover event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dragover = dragover
    /**
     * Represents the callack to be executed upon the dragstart event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.dragstart = dragstart
    /**
     * Represents the callack to be executed upon the drop event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/DragEvent|DragEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.drop = drop
    /**
     * Represents the callback to be executed upon the wheel event.
     *
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent|WheelEvent}
     *
     * @type {mouseCallback}
     * @default event => {}
     */
    this.wheel = wheel
    this.element = element
    // if (element instanceof Element || element instanceof Document || element instanceof Window) {
    //   this._element.onclick = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.click(event)
    //   }
    //   this._element.oncontextmenu = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.contextmenu(event)
    //   }
    //   this._element.ondblclick = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dblclick(event)
    //   }
    //   this._element.onmousedown = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mousedown(event)
    //   }
    //   this._element.onmouseenter = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mouseenter(event)
    //   }
    //   this._element.onmouseleave = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mouseleave(event)
    //   }
    //   this._element.onmousemove = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mousemove(event)
    //   }
    //   this._element.onmouseout = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mouseout(event)
    //   }
    //   this._element.onmouseover = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mouseover(event)
    //   }
    //   this._element.onmouseup = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.mouseup(event)
    //   }
    //   this._element.ondrag = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.drag(event)
    //   }
    //   this._element.ondragend = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dragend(event)
    //   }
    //   this._element.ondragenter = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dragenter(event)
    //   }
    //   this._element.ondragexit = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dragexit(event)
    //   }
    //   this._element.ondragleave = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dragleave(event)
    //   }
    //   this._element.ondragover = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dragover(event)
    //   }
    //   this._element.ondragstart = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.dragstart(event)
    //   }
    //   this._element.ondrop = event => {
    //     this._lastPosition = this._position
    //     this._position = new Vector2(event.clientX, event.clientY)
    //     this._velocity = Vector2.subtract(this._position, this._lastPosition)
    //     this.drop(event)
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
      this._element.onwheel = event => {}
      this._element.onclick = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.click(event)
        }
      }
      this._element.oncontextmenu = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.contextmenu(event)
        }
      }
      this._element.ondblclick = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dblclick(event)
        }
      }
      this._element.onmousedown = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mousedown(event)
        }
      }
      this._element.onmouseenter = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mouseenter(event)
        }
      }
      this._element.onmouseleave = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mouseleave(event)
        }
      }
      this._element.onmousemove = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mousemove(event)
        }
      }
      this._element.onmouseout = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mouseout(event)
        }
      }
      this._element.onmouseover = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mouseover(event)
        }
      }
      this._element.onmouseup = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.mouseup(event)
        }
      }
      this._element.ondrag = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.drag(event)
        }
      }
      this._element.ondragend = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dragend(event)
        }
      }
      this._element.ondragenter = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dragenter(event)
        }
      }
      this._element.ondragexit = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dragexit(event)
        }
      }
      this._element.ondragleave = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dragleave(event)
        }
      }
      this._element.ondragover = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dragover(event)
        }
      }
      this._element.ondragstart = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.dragstart(event)
        }
      }
      this._element.ondrop = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.drop(event)
        }
      }
      this._element.onwheel = event => {
        this._lastPosition = this._position
        this._position = new Vector2(event.clientX, event.clientY)
        this._velocity = Vector2.subtract(this._position, this._lastPosition)
        if (this.enabled) {
          this.wheel(event)
        }
      }
    } else {
      throw new TypeError()
    }
  }

  /**
   * Represents the last known position of the mouse.
   *
   * @type {Vector2}
   */
  get position () {
    return this._position
  }

  /**
   * Represents the last know velocity of the mouse pointer.
   *
   * @type {Vector2}
   */
  get velocity () {
    return this._velocity
  }
}

export default MouseController
