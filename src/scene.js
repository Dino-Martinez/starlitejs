import Layer from './layer.js'

export default class Scene {
  constructor () {
    this.layers = []
    this.gameLoopId = 0
  }

  /**
   * @param {Layer} layer
   */
  addLayer = layer => {
    if (layer instanceof Layer) {
      this.layers.push(layer)
      this.layers.sort((a, b) => (a.priority < b.priority ? -1 : 1))
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Layer[]} layers
   */
  addLayers = layers => {
    if (layers.every(layer => layer instanceof Layer)) {
      this.layers.push(...layers)
      this.layers.sort((a, b) => (a.priority < b.priority ? -1 : 1))
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Layer} layer
   */
  removeLayer = layer => {
    if (layer instanceof Layer) {
      this.layers.pop(layer)
    } else {
      throw new TypeError()
    }
  }

  /**
   * @param {Layer[]} layers
   */
  removeLayers = layers => {
    if (layers.every(layer => layer instanceof Layer)) {
      this.layers.pop(...layers)
    } else {
      throw new TypeError()
    }
  }

  render () {
    this.layers.forEach(layer => layer.render())
  }

  gameLoop = () => {
    this.render()
    if (window) this.gameLoopId = window.requestAnimationFrame(this.gameLoop)
  }

  start () {
    this.gameLoop()
  }

  stop () {
    if (window) window.cancelAnimationFrame(this.gameLoopId)
  }
}
