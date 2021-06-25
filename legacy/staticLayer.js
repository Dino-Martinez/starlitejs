import { Layer } from './starlite-core.js'

class StaticLayer extends Layer {
  /**
   * Creates a static layer.
   *
   * @class StaticLayer
   * @classdesc Class representing a static layer (never redraws).
   *
   * @param {string} name The name of the layer.
   * @param {number} [priority=0] The z-index of the layer.
   * @param {boolean} [transparent=true] Whether or not the pixels in the layer can be transparent.
   * @param {number} [width=640] The width of the layer in pixels.
   * @param {number} [height=480] The height of the layer in pixels.
   */
  constructor (name, priority = 0, transparent = true, width = 640, height = 480) {
    super(name, priority, transparent, width, height)
    this._rendered = false
  }

  /**
   * @override
   */
  render () {
    if (!this._rendered) {
      super.render()
      this._rendered = true
    }
  }
}

export default StaticLayer
