// module aliases
var Matter = require("matter-js")
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Body = Matter.Body,
    Composite = Matter.Composite;

var Keyboard = require("./src/keyboard.js");
var Layer = require("./src/layer.js");
var Layers = require("./src/layers.js");
var Scene = require("./src/scene.js");

// create an engine
var engine = Engine.create(),
    world = engine.world;

engine.gravity.y = 0;

// Create canvas with tabindex
var canvas = document.createElement('canvas');
canvas.tabIndex = 1;

var scene = Scene.create(canvas, engine);

var gameLayer = Layers.pong(canvas);
console.log(gameLayer);

var ball = Bodies.circle(gameLayer.width / 2, gameLayer.height / 2, 15, {frictionAir: 0});
ball.mass = 1
ball.restitution = 1

Body.setVelocity(ball, {x: 3, y: 5});

Layer.add(gameLayer, [ball])
Scene.add(scene, [gameLayer])


// Start rendering
Scene.start(scene)

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
