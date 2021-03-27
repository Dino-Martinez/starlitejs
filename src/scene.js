import Layer from './layer.js'

class Scene {
  /**
   * Creates a scene.
   * 
   * @class Scene
   * @classdesc Class representing a scene.
   */
  constructor () {
    /**
     * Represents the list of layers that belong to the scene.
     * 
     * @type {Layer[]}
     * @default []
     */
    this.layers = []
    this._gameLoopId = 0
  }

  /**
   * Adds a layer to the scene.
   * 
   * @see {@linkcode Scene#addLayers} for adding multiple layers.
   * @see {@linkcode Scene@removeLayer} for removing a layer.
   * 
   * @param {Layer} layer The layer to add to the scene.
   * @throws {TypeError}
   */
  addLayer (layer) {
    if (layer instanceof Layer) {
      this.layers.push(layer)
      this.layers.sort((a, b) => (a.priority < b.priority ? -1 : 1))
    } else {
      throw new TypeError()
    }
  }

  /**
   * Adds multiple layers to the scene
   * 
   * @see {@linkcode Scene#addLayer} for adding a single layer.
   * @see {@linkcode Scene#removeLayer} for removing a layer.
   * 
   * @param {Layer[]} layers The list of layers to add to the scene.
   * @throws {TypeError}
   */
  addLayers (layers) {
    if (layers.every(layer => layer instanceof Layer)) {
      this.layers.push(...layers)
      this.layers.sort((a, b) => (a.priority < b.priority ? -1 : 1))
    } else {
      throw new TypeError()
    }
  }

  /**
   * Removes a layer from the scene.
   * 
   * @see {@linkcode Scene#removeLayers} for removing multiple layers.
   * @see {@linkcode Scene#addLayer} for adding a layer.
   * 
   * @param {Layer} layer The layer to remove from the scene.
   * @throws {TypeError}
   */
  removeLayer (layer) {
    if (layer instanceof Layer) {
      this.layers.pop(layer)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Removes multiple layers from the scene.
   * 
   * @see {@linkcode Scene#removeLayer} for removing a single layer.
   * @see {@linkcode Scene#addLayer} for adding a layer.
   * 
   * @param {Layer[]} layers The list of layers to remove from the scene.
   * @throws {TypeError}
   */
  removeLayers (layers) {
    if (layers.every(layer => layer instanceof Layer)) {
      this.layers.pop(...layers)
    } else {
      throw new TypeError()
    }
  }

  /**
   * Calls the render function for all of the layers in the scene.
   * 
   * @see {@linkcode Layer#render}}
   */
  render () {
    this.layers.forEach(layer => layer.render())
  }

  /**
   * Runs the game loop for the scene once {@linkcode Scene#start} is called.
   * 
   * @function
   * @memberof Scene
   * @instance
   */
  gameLoop = () => {
    this.render()
    this._gameLoopId = requestAnimationFrame(this.gameLoop)
  }

  /**
   * Starts the game loop.
   */
  start () {
    this.gameLoop()
  }

  /**
   * Stops the game loop.
   */
  stop () {
    cancelAnimationFrame(this._gameLoopId)
  }
}

export default Scene
