var Keyboard = require("./keyboard.js");
var Scene = {};
var Matter = require("matter-js");
var Bodies = Matter.Bodies,
    Events = Matter.Events,
    Render = Matter.Render,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Common = Matter.Common,
    Composite = Matter.Composite;

/**
    * The `Starlite.Scene` module contains methods for creating and manipulating layer models.
    * A `Starlite.Scene` is a wrapper for having multiple layers, which share the same engine and control inputs.
    * @class Scene
    */

var Scene = {};

module.exports = Scene;

(function() {
    /**
         * Creates a new scene, which hosts layers. The options parameter is an object that specifies any properties you wish to override the defaults.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} options
         * @return {layer} layer
         */
    Scene.create = function(canvas, engine, options) {
        var defaults = {
            id: Common.nextId(),
            type: 'scene',
            label: 'Scene',
            layers: [],
            events: null,
            render: Render.create({
              element: document.body,
              canvas: canvas,
              engine: engine
            })
        };

        var scene = Common.extend(defaults, options);
        return scene
    };

    /*
     * Add an array of layers to our scene. These will all share the same renderer, physics engine, and control inputs
     */
    Scene.add = function(scene, layers) {
      scene.layers.push(...layers);
    }

    /*
     * Adds a default keyboard input to our scene, which will fire events upon keyboard input.
     */
    Scene.addKeyboardInput = function(scene) {
      return Keyboard.create(scene.render.canvas, scene.render.engine);
    }

    /*
     * Adds a default mouse constraint to our scene, which will allow interaction via spring with every body.
     */
    Scene.addMouseConstraint = function(scene) {
      var mouse = Mouse.create(scene.render.canvas),
          mouseConstraint = MouseConstraint.create(scene.render.engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: {
                      visible: true
                  }
              }
          });

      Composite.add(scene.render.engine.world, mouseConstraint);
      //keep the mouse in sync with rendering
      scene.render.mouse = mouse;
      return mouse;
    }

    /*
     * Starts the scene's renderer.
     */
    Scene.start = function(scene) {
      var render = scene.render
      Render.run(render)
    }
})();
