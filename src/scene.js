import Layer from './layer.js'
import Entity from './entity.js'

const div = document.getElementById('container')
const canvas = document.createElement('canvas')
canvas.id = 'CursorLayer'
canvas.width = 600
canvas.height = 800
canvas.style.zIndex = 8
canvas.style.position = 'absolute'
canvas.style.border = '1px solid'
const ctx = canvas.getContext('2d')
ctx.fillStyle = '#baf5ff'
ctx.fillRect(0, 0, canvas.width, canvas.height)
div.appendChild(canvas)

const e = new Entity()
e.x = 50
e.y = 150
e.size = new Vector2(50, 100)
e.rotation = 50

const e2 = new Entity()
e2.x = 150
e2.y = 150
e2.size = new Vector2(50, 150)
e2.rotation = 180

const l1 = new Layer('Middle Ground', ctx)

l1.addEntity(e)
l1.addEntity(e2)

l1.render()
