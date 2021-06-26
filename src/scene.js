

var Keyboard = require("./keyboard.js");
var Scene = {};
var Matter = require("matter-js");
var Bodies = Matter.Bodies,
    Events = Matter.Events,
    Render = Matter.Render,
    Common = Matter.Common;

/**
    * The `Starlite.Scene` module contains methods for creating and manipulating layer models.
    * A `Starlite.Scene` is a rigid layer that can be simulated by a `Matter.Engine`.
    * Factories for commonly used layer configurations (such as rectangles, circles and other polygons) can be found in the module `Starlite.Scenes`.
    * @class Scenes
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
     * Add an array of layers to our scene
     */
    Scene.add = function(scene, layers) {
      scene.layers.push(...layers);
    }

    Scene.addKeyboardInput = function(scene) {
      return Keyboard.create(scene.render.canvas, scene.render.engine);
    }

    Scene.start = function(scene) {
      var render = scene.render
      Render.run(render)
    }
})();
