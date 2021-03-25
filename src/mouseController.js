import Controller from "./controller.js"

export default class Mouse extends Controller {
  /**
   * @callback mouseCallback
   * @param {MouseEvent} event
   */

  /**
   * @param {mouseCallback} onclick 
   * @param {mouseCallback} oncontextmenu 
   * @param {mouseCallback} ondblclick 
   * @param {mouseCallback} onmousedown 
   * @param {mouseCallback} onmouseenter 
   * @param {mouseCallback} onmouseleave 
   * @param {mouseCallback} onmousemove 
   * @param {mouseCallback} onmouseout 
   * @param {mouseCallback} onmouseover 
   * @param {mouseCallback} onmouseup 
   * @param {Element|Document} element 
   */
  constructor (onclick = event => {}, oncontextmenu = event => {}, ondblclick = event => {}, onmousedown = event => {}, onmouseenter = event => {}, onmouseleave = event => {}, onmousemove = event => {}, onmouseout = event => {}, onmouseover = event => {}, onmouseup = event => {}, element = document) {
    super()
    this.onclick = onclick
    this.oncontextmenu = oncontextmenu
    this.ondblclick = ondblclick
    this.onmousedown = onmousedown
    this.onmouseenter = onmouseenter
    this.onmouseleave = onmouseleave
    this.onmousemove = onmousemove
    this.onmouseout = onmouseout
    this.onmouseover = onmouseover
    this.onmouseup = onmouseup
    if (element instanceof Element || element instanceof Document) {
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
    } else {
      throw new TypeError()
    }
  }

  /**
   * @returns {Element|Document}
   */
  get element() {
    return this._element
  }

  /**
   * @param {Element|Document} newElement
   */
  set element(newElement) {
    if (newElement instanceof Element || newElement instanceof Document) {
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
