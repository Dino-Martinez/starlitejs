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

var Keyboard = require("./keyboard.js");

// create an engine
var engine = Engine.create(),
    world = engine.world;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.circle(400, 50, 50, { isStatic: true });
var boxB = Bodies.circle(400, 200, 100);
boxA.mass = 0.5
boxA.restitution = 1
boxB.restitution = 1
console.log(boxA)

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: true
            }
        }
    });
var keyboard = Keyboard.create(document, engine);
Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// add all of the bodies to the world
Composite.add(world, [boxA, boxB, ground]);
console.dir(engine)
// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

Events.on(keyboard, 'keydown', (event)=>{
  const keys = event.keys
  Body.setVelocity(boxB, {x: 5, y: boxB.velocity.y})
})

Events.on(keyboard, 'keyup', (event)=>{
  const keys = event.keys
  Body.setVelocity(boxB, {x: 0, y: boxB.velocity.y})
})
