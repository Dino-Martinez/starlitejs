// module aliases
var Matter = require("matter-js")
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Body = Matter.Body,
    Composite = Matter.Composite;

var Keyboard = require("./src/keyboard.js");
var Layer = require("./src/layer.js");
var Layers = require("./src/layers.js");
var Scene = require("./src/scene.js")

// create an engine
var engine = Engine.create(),
    world = engine.world;

// Create canvas with tabindex
var canvas = document.createElement('canvas');
canvas.tabIndex = 1;

var scene = Scene.create(canvas, engine)


var layer = Layers.allBounds(canvas);

// create two boxes and a ground
var boxA = Bodies.circle(400, 50, 50, { isStatic: true });
var boxB = Bodies.circle(400, 200, 100);
boxA.mass = 0.5
boxA.restitution = 1
boxB.restitution = 1

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

Layer.add(layer, [boxA, boxB, ground])

Scene.add(scene, [layer])
Scene.start(scene)

// add mouse control
// var mouse = Mouse.create(render.canvas),
//     mouseConstraint = MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//             stiffness: 0.2,
//             render: {
//                 visible: true
//             }
//         }
//     });
//
var keyboard = Scene.addKeyboardInput(scene)
// Composite.add(world, mouseConstraint);
// keep the mouse in sync with rendering
// render.mouse = mouse;

// add all of the bodies to the world
Composite.add(world, layer.bodies);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

Events.on(keyboard, 'keydown', (event)=>{
  const key = event.key
  if (key === 'd')
    Body.setVelocity(boxB, {x: 5, y: boxB.velocity.y})
})

Events.on(keyboard, 'keyup', (event)=>{
  const key = event.key
  if (key === 'd')
    Body.setVelocity(boxB, {x: 0, y: boxB.velocity.y})
})
