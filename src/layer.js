
var Layer = {};
var Matter = require("matter-js");
var Bodies = Matter.Bodies,
    Events = Matter.Events,
    Common = Matter.Common;

/**
    * The `Starlite.Layer` module contains methods for creating and manipulating layer models.
    * A `Starlite.Layer` is a rigid layer that can be simulated by a `Matter.Engine`.
    * Factories for commonly used layer configurations (such as rectangles, circles and other polygons) can be found in the module `Starlite.Layers`.
    * @class Layers
    */

var Layer = {};

module.exports = Layer;

(function() {

    /**
         * Creates a new rigid layer model. The options parameter is an object that specifies any properties you wish to override the defaults.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} options
         * @return {layer} layer
         */
    Layer.create = function(canvas, options) {
        var defaults = {
            id: Common.nextId(),
            type: 'layer',
            label: 'Layer',
            bodies: [],
            isStatic: false,
            events: null,
            bounds: {top: true, right: true, bottom: true, left: true},
            width: canvas.width || 600,
            height: canvas.height || 480
        };

        var layer = Common.extend(defaults, options);
        _createBounds(layer);
        return layer;
    };

    /*
     * Add an array of bodies to our layer
     */
    Layer.add = function(layer, bodies) {
      // If layer is static, enforce all bodies being static
      if (layer.isStatic) {
        bodies = bodies.map(body => {
          body.isStatic = true;
          return body;
        })
      }
      layer.bodies.push(...bodies);
    }

    var _createBounds = function(layer) {
        for (const key in layer.bounds) {
            if (key === 'top') {
                // top bound
                var top = Bodies.rectangle(layer.width / 2, -15, layer.width, 30, {isStatic: true});
                layer.bodies.push(top);
            }
            if (key === 'right') {
                // right bound
                var right = Bodies.rectangle(layer.width + 15, layer.height / 2, 30, layer.height, {isStatic: true});
                layer.bodies.push(right);

            }
            if (key === 'bottom') {
                // bottom bound
                var bottom = Bodies.rectangle(layer.width / 2, layer.height + 15, layer.width, 30, {isStatic: true});
                layer.bodies.push(bottom);

            }
            if (key === 'left') {
                // left bound
                var left = Bodies.rectangle(-15, layer.height / 2, 30, layer.height, {isStatic: true});
                layer.bodies.push(left);
            }
        }
    };
})();
