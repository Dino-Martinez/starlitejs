import Layer from './layer.js'

class PhysicsLayer extends Layer {
  /**
   * Creates a phyiscs layer.
   * 
   * @class PhysicsLayer
   * @classdesc Class representing a physics layer.
   * @extends Layer
   * 
   * @param {string} name The name of the layer.
   * @param {number} [priority=0] The z-index of the layer.
   * @param {number} [width=640] The width of the layer in pixels.
   * @param {number} [height=480] The height of the layer in pixels.
   */
  constructor (name, priority = 0, width = 640, height = 480) {
    super(name, priority, width, height)
  }

  /**
   * @override
   */
  render () {
    this.entities.forEach(entity => {
      this.entities.forEach(other => {
        if (entity !== other) entity.collide(other)
      })
      entity.preRender(this.ctx)
    })
    this.entities.forEach(entity => entity.render(this.ctx))
    this.entities.forEach(entity => entity.postRender())
  }
}

export default PhysicsLayer
