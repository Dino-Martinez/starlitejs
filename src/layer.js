
var Layer = {};
var Matter = require("matter-js");
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Layer = Matter.Layer,
    Common = Matter.Common,
    Composite = Matter.Composite;

    /**
    * The `Matter.Layer` module contains methods for creating and manipulating layer models.
    * A `Matter.Layer` is a rigid layer that can be simulated by a `Matter.Engine`.
    * Factories for commonly used layer configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
    *
    * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
    * @class Layer
    */

    var Layer = {};

    module.exports = Layer;

    (function() {

        /**
         * Creates a new rigid layer model. The options parameter is an object that specifies any properties you wish to override the defaults.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * Vertices must be specified in clockwise order.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} options
         * @return {layer} layer
         */
        Layer.create = function(options) {
            var defaults = {
                id: Common.nextId(),
                type: 'layer',
                label: 'Layer',
                bodies: [],
                },
                events: null,
                bounds: [false, false, false, true]
            };

            var layer = Common.extend(defaults, options);
            
            return layer;
        };
    })();
