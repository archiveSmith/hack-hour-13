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
  this.events = {};
  this.subscribe = function(eventName, func) {
    // check if the event is in our events object.
    // if not add it as a key and value of empty array
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // if it is push the callback func
    this.events[eventName].push(func);

    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFunc => func !== eventFunc);
    };
  }
  // this.emit = function(eventName, data) {
  //   const event = this.events[eventName];
  //   if (event) {
  //     event.forEach(func => {
  //       func.call(null, data);
  //     });
  //   }
  // }
}

EventEmitter.prototype.on = function(funcName, func) {
  this.subscribe(funcName, func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.subscribe(funcName, ...args);
};

let instance = new EventEmitter();
let counter = 0;

instance.on('increment', function() {
  counter += 1;
}); // counter should be 0
console.log(instance.trigger('increment')); // counter should be 1
console.log(instance.trigger('increment')); // counter should be 2

module.exports = EventEmitter;
