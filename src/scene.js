import Layer from './layer.js'
import Entity from './entity.js'

export default class Scene {
  constructor () {
    this.layers = []
  }

  addLayer (layer) {
    this.layers.push(layer)
    this.layers.sort((a, b) => (a.priority < b.priority ? -1 : 1))
  }

  render () {
    console.log('Rendering')
    this.layers.forEach(layer => layer.render())
  }
}
