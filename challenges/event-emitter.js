'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  // object of listener funcs associated w/ event
  this.listenerObj = {};
}

// add event listener
EventEmitter.prototype.on = function(funcName, func) {
  // array of listeners for given event
  const eventListeners = this.listenerObj[funcName];
  if ( Array.isArray(eventListeners) ) {
    eventListeners.push(func);
  } else {
    this.listenerObj[funcName] = [func];
  }
};

// emit event and trigger listeners
EventEmitter.prototype.trigger = function(funcName, ...args) {
  // call all listeners w/ args if any
  const eventListeners = this.listenerObj[funcName];
  if ( Array.isArray(eventListeners) ) {
    for (let listener of eventListeners) {
      listener(...args);
    }
  }
};

module.exports = EventEmitter;
