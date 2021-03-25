import Layer from './layer.js'

export default class PhysicsLayer extends Layer {
  constructor (name, priority = 0, width = 640, height = 480) {
    super(name, priority, width, height)
  }

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
