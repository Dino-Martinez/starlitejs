import {
  Scene,
  StaticLayer,
  PhysicsLayer,
  PhysicsEntity,
  Entity,
  Layer,
  Vector2,
  MouseController,
  KeyboardController,
  Label,
  Button
} from './starlite.js'

const incrementColor = function (color, step) {
  let colorToInt = parseInt(color.substr(1), 16) // Convert HEX color to integer
  const nstep = parseInt(step) // Convert step to integer
  if (!isNaN(colorToInt) && !isNaN(nstep)) {
    // Make sure that color has been converted to integer
    colorToInt += nstep // Increment integer with step
    let ncolor = colorToInt.toString(16) // Convert back integer to HEX
    ncolor = '#' + new Array(7 - ncolor.length).join(0) + ncolor // Left pad "0" to make HEX look like a color
    if (/^#[0-9a-f]{6}$/i.test(ncolor)) {
      // Make sure that HEX is a valid color
      return ncolor
    }
  }
  return color
}

const s = new Scene()
const l = new PhysicsLayer(name, 0, true, 1152, 648)
const entities = []

const color = '#000000'
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const e = new PhysicsEntity()
    e.scale = new Vector2(l.width / 75, l.width / 75)
    e.x = i * 40 + 50
    e.y = j * 40 + 50
    const step = 16677217 / 16
    e.color = incrementColor(color, i * j * step)
    const r = Math.random() * 360
    const x = Math.random() * 4
    const y = Math.random() * 4
    e.velocity = new Vector2(x, y)
    entities.push(e)
  }
}

const border1 = new PhysicsEntity()
border1.scale = new Vector2(50, l.height)
border1.x = -20
border1.y = l.height / 2
border1.freeze = { x: true, y: true }

const border2 = new PhysicsEntity()
border2.scale = new Vector2(l.width, 50)
border2.x = l.width / 2
border2.y = -20
border2.freeze = { x: true, y: true }

const border3 = new PhysicsEntity()
border3.scale = new Vector2(50, l.height)
border3.x = l.width + 20
border3.y = l.height / 2
border3.freeze = { x: true, y: true }

const border4 = new PhysicsEntity()
border4.scale = new Vector2(l.width, 50)
border4.x = l.width / 2
border4.y = l.height + 20
border4.freeze = { x: true, y: true }

l.addEntities([border1, border2, border3, border4])
l.addEntities(entities)
s.addLayer(l)
s.start()
