import Entity from './entity.js'
import Transform from './transform.js'
import Vector2 from './vector2.js'

class Layer {
  /**
   * Creates a layer.
   * 
   * @class Layer
   * @classdesc Class representing a canvas layer.
   * @see {@linkcode PhysicsLayer} for a layer that handles physics.
   * 
   * @param {string} name The name of the layer.
   * @param {number} [priority=0] The z-index of the layer.
   * @param {number} [width=640] The width of the layer in pixels.
   * @param {number} [height=480] The height of the layer in pixels.
   */
  constructor (name, priority = 0, width = 640, height = 480) {
    /**
     * Represents the name of the layer.
     * 
     * @type {string}
     */
    this.name = name
    /**
     * Represents the z-index of the layer.
     * 
     * @type {number}
     * @default 0
     */
    this.priority = priority
    /**
     * Represents the list of entities that the layer renders.
     * 
     * @type {Entity[]}
     * @default []
     */
    this.entities = []
    /**
     * Represents the transform of the layer.
     * 
     * @type {Transform}
     */
    this.transform = new Transform()
    this.transform.scale = new Vector2(width, height)
    /**
     * Represents whether or not the layer is active (will be rendered at all).
     */
    this.active = true
    /**
     * Represents the canvas element of the layer.
     * 
     * @type {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.transform.width
    this.canvas.height = this.transform.height
    this.canvas.style.zIndex = this.priority
    this.canvas.style.position = 'absolute'
    this.canvas.style.border = '1px solid'
    /**
     * Represents the rendering context for the canvas of the layer.
     * 
     * @type {CanvasRenderingContext2D}
     */
    this.ctx = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)
  }

  /**
   * Represents the width of the layer in pixels.
   * 
   * @type {number}
   * @readonly
   */
  get width () {
    return this.transform.width
  }

  /**
   * Represents the height of the layer in pixels.
   * 
   * @returns {number}
   * @readonly
   */
  get height () {
    return this.transform.height
  }

  /**
   * Adds an entity for the layer to render.
   * 
   * @see {@linkcode Layer#addEntities} for adding multiple entities.
   * @see {@linkcode Layer#removeEntity} for removing an entity.
   *
   * @param {Entity} entity The entity to add to the layer.
   * @throws {TypeError}
   */
  addEntity (entity) {
    if (entity instanceof Entity) {
      this.entities.push(entity)
      this.entities.sort((a, b) => (a.priority < b.priority ? -1 : 1))
    } else {
      throw new TypeError()
    }
  }

  /**
   * Adds multiple entities for the layer to render.
   * 
   * @see {@linkcode Layer#addEntity} for adding a single entity.
   * @see {@linkcode Layer#removeEntity} for removing an entity.
   *
   * @param {Entity[]} entities The list of entities to add to the layer.
   * @throws {TypeError}
   */
  addEntities (entities) {
    if (entities.every(entity => entity instanceof Entity)) {
      this.entities.push(...entities)
      this.entities.sort((a, b) => (a.priority < b.priority ? -1 : 1))
    } else {
      throw new TypeError()
    }
  }

  /**
   * Removes an entity for the layer to render.
   * 
   * @see {@linkcode Layer#removeEntities} for removing multiple entities.
   * @see {@linkcode Layer#addEntity} for adding an entity.
   *
   * @param {Entity} entity The entity to remove from the layer.
   * @throws {TypeError}
   */
  removeEntity (entity) {
    if (entity instanceof Entity) {
      this.entities.pop(entity)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Removes multiple entities for the layer to render.
   * 
   * @see {@linkcode Layer#removeEntity} for removing a single entity.
   * @see {@linkcode Layer#addEntity} for adding an entity.
   *
   * @param {Entity[]} entities The list of entities to remove from the layer.
   * @throws {TypeError}
   */
  removeEntities (entities) {
    if (entities.every(entity => entity instanceof Entity)) {
      this.entities.pop(...entities)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Renders the entities that have been added to the layer.
   * 
   * @see {@linkcode Entity#preRender}
   * @see {@linkcode Entity#render}
   * @see {@linkcode Entity#postRender}
   */
  render () {
    this.entities.forEach(entity => entity.preRender(this.ctx))
    this.entities.forEach(entity => entity.render(this.ctx))
    this.entities.forEach(entity => entity.postRender())
  }
}

export default Layer
