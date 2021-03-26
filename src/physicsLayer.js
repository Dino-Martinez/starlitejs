import Layer from './layer.js'

export default class PhysicsLayer extends Layer {
  /**
   * @param {string} name The name of this layer
   * @param {number} [priority=0] The z-index priority level of this layer
   * @param {number} [width=640]  The width of this layer
   * @param {number} [height=480] The height of this layer
   */
  constructor (name, priority = 0, width = 640, height = 480) {
    super(name, priority, width, height)
  }

  /**
   * render - Renders all entities on this later
   */
  render = () => {
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
