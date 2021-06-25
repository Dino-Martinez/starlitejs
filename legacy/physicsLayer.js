import { Layer } from './starlite-core.js'

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
   * @param {boolean} [transparent=true] Whether or not the pixels in the layer can be transparent.
   * @param {number} [width=640] The width of the layer in pixels.
   * @param {number} [height=480] The height of the layer in pixels.
   */
  constructor (name, priority = 0, transparent = true, width = 640, height = 480) {
    super(name, priority, transparent, width, height)
  }

  /**
   * @override
   */
  render () {
    this.entities.forEach(entity => {
      entity.update()
    })
    const length = this.entities.length
    for (let i = 0; i < length; i++) {
      this.entities[i].preRender(this.ctx)
      for (let j = length-1; j > i; j--)
      {
        if (this.entities[i] !== this.entities[j]){
          this.entities[j].preRender(this.ctx)
          this.entities[i].collide(this.entities[j])
          this.entities[j].collide(this.entities[i])
        }
      }
    }
    this.entities.forEach(entity => entity.handleCollision())
    this.entities.forEach(entity => entity.render(this.ctx))
    this.entities.forEach(entity => entity.postRender())
  }
}

export default PhysicsLayer
