import Entity from './entity.js'
import Transform from './transform.js'
import Vector2 from './vector2.js'

export default class Layer {
  /**
   * @param {string} name
   * @param {number} priority
   */
  constructor (name, priority = 0) {
    this.name = name
    this.priority = priority
    this.entities = []
    this.transform = new Transform()
    this.transform.vectorScale(new Vector2(600, 800))
    this.active = true
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.transform.width
    this.canvas.height = this.transform.height
    this.canvas.style.zIndex = this.priority
    this.canvas.style.position = 'absolute'
    this.canvas.style.border = '1px solid'
    this.ctx = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)
  }

  /**
   * @param {Entity} entity
   */
  addEntity (entity) {
    if (entity instanceof Entity) {
      this.entities.push(entity)
      this.entities.sort((a, b) => (a.priority < b.priority) ? -1 : 1)
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Entity[]} entities
   */
  addEntities (entities) {
    if (entities.every(entity => entity instanceof Entity)) {
      this.entities.push(...entities)
      this.entities.sort((a, b) => (a.priority < b.priority) ? -1 : 1)
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Entity} entity
   */
  removeEntity (entity) {
    if (entity instanceof Entity) {
      this.entities.pop(entity)
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Entity[]} entities
   */
  removeEntities (entities) {
    if (entities.every(entity => entity instanceof Entity)) {
      this.entities.pop(...entities)
    } else {
      throw new TypeError()
    }
  }

  render () {
    this.entities.forEach(entity => entity.preRender())
    this.entities.forEach(entity => entity.render(this.ctx))
    this.entities.forEach(entity => entity.postRender())
  }
}
