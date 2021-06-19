/**
* The `Matter.Keyboard` module contains methods for creating and receiving keyboard inputs.
*
* @class Keyboard
*/

var Keyboard = {};
var Matter = require("matter-js");
module.exports = Keyboard;

var Common = Matter.Common;
var Events = Matter.Events;

(function() {

    /**
     * Creates a keyboard input.
     * @method create
     * @param {HTMLElement} element
     * @return {keyboard} A new keyboard
     */
    Keyboard.create = function(element, engine) {
        var keyboard = {};

        if (!element) {
            Common.log('Keyboard.create: element was undefined, defaulting to document', 'warn');
        }

        keyboard.element = element || document;
        keyboard.keys = {}
        keyboard.sourceEvents = {
            keydown: null,
            keyup: null
        };

        keyboard.keydown = function(event) {
          const key = event.code.slice(3).toLowerCase();
          keyboard.keys[key] = true;
          keyboard.sourceEvents.keydown = event
        };

        keyboard.keyup = function(event) {
          const key = event.code.slice(3).toLowerCase();
          keyboard.keys[key] = false;
          keyboard.sourceEvents.keyup = event
        };

        Keyboard.setElement(keyboard, keyboard.element);

        Events.on(engine, 'beforeUpdate', async function () {
          Keyboard._triggerEvents(keyboard)
        });

        return keyboard;
    };

    /**
    * Triggers keyboard constraint events.
    * @method _triggerEvents
    * @private
    * @param {keyboard} keyboardConstraint
    */
   Keyboard._triggerEvents = function(keyboard) {
       const keyboardEvents = keyboard.sourceEvents
       if (keyboardEvents.keydown)
        Events.trigger(keyboard, 'keydown', { keys: keyboard.keys });

       if (keyboardEvents.keyup)
        Events.trigger(keyboard, 'keyup', { keys: keyboard.keys });

       // reset the keyboard state ready for the next step
       Keyboard.clearSourceEvents(keyboard);
   };

    /**
     * Sets the element the keyboard is bound to (and relative to).
     * @method setElement
     * @param {keyboard} keyboard
     * @param {HTMLElement} element
     */
    Keyboard.setElement = function(keyboard, element) {
        keyboard.element = element;

        element.addEventListener('keydown', keyboard.keydown);
        element.addEventListener('keyup', keyboard.keyup);

        element.addEventListener('touchstart', keyboard.keydown);
        element.addEventListener('touchend', keyboard.keyup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {keyboard} keyboard
     */
    Keyboard.clearSourceEvents = function(keyboard) {
        keyboard.sourceEvents.keydown = null;
        keyboard.sourceEvents.keyup = null;
    };

})();
