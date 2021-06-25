/**
* The `Keyboard` module contains methods for creating and receiving keyboard inputs.
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
     * Creates a keyboard handler.
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
        keyboard.keys = {} // Of the structure: {a: false, b: false, ..., z: true} where true means the key is currently pressed
        keyboard.sourceEvents = {
            keydown: null,
            keyup: null,
            keychange: null
        };

        keyboard.keydown = function(event) {
          event.key = event.code.slice(3).toLowerCase();
          keyboard.keys[event.key] = true;
          keyboard.sourceEvents.keydown = event;
          keyboard.sourceEvents.keychange = event;
        };

        keyboard.keyup = function(event) {
          event.key = event.code.slice(3).toLowerCase();
          keyboard.keys[event.key] = false;
          keyboard.sourceEvents.keyup = event;
          keyboard.sourceEvents.keychange = event;
        };

        Keyboard.setElement(keyboard);

        Events.on(engine, 'beforeUpdate', async function () {
          Keyboard._triggerEvents(keyboard);
        });

        return keyboard;
    };

    /**
    * Triggers keyboard events.
    * @method _triggerEvents
    * @private
    * @param {keyboard} keyboard
    */
   Keyboard._triggerEvents = function(keyboard) {
      const keyboardEvents = keyboard.sourceEvents
      if (keyboardEvents.keydown)
        Events.trigger(keyboard, 'keydown', { key: keyboardEvents.keydown.key });

      if (keyboardEvents.keyup)
        Events.trigger(keyboard, 'keyup', { key: keyboardEvents.keyup.key });

      if (keyboardEvents.keychange)
        Events.trigger(keyboard, 'keychange', { keys: keyboard.keys });

      // reset the keyboard state ready for the next step
      Keyboard.clearSourceEvents(keyboard);
   };

    /**
     * Sets the element the keyboard is bound to (and relative to).
     * Note that this will mean keyboard events are only registered if this
     * element is in focus (i.e. is the last element the mouse clicked)
     * @method setElement
     * @param {keyboard} keyboard
     * @param {HTMLElement} element
     */
    Keyboard.setElement = function(keyboard) {
        keyboard.element.addEventListener('keydown', keyboard.keydown);
        keyboard.element.addEventListener('keyup', keyboard.keyup);
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
