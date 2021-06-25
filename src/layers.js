/**
* The `Starlite.Layers` module contains factory methods for creating layer models
* with commonly used body configurations (such as pong-style borders).
* @class Bodies
*/
var Layer = require("./layer.js");
var Matter = require("matter-js");
var Bodies = Matter.Bodies,
    Events = Matter.Events,
    Common = Matter.Common;
var Layers = {};

module.exports = Layers;

(function (){
  /**
   * Creates a new static layer, meaning that all bodies added to it will be static and not considered by the physics engine.
   */
  Layers.static = function(canvas, options) {
      options = options || {}

      var layer = {
        isStatic: true
      }

      return Layer.create(canvas, Common.extend({}, layer, options));
  };

  /**
   * Creates a new layer with no walls as boundaries
   */
  Layers.noBounds = function(options) {
      var defaults = {
          bounds: {top: false, right: false, bottom: false, left: false}
      };

      return Layer.create(Common.extend({}, layer, options));
  };

})()
