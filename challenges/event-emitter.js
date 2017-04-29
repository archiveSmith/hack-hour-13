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
  this.funcObj = {}
}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.funcObj[funcName]) this.funcObj[funcName] = [func]
  else this.funcObj[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.funcObj[funcName].forEach((value) => value(args));
};

module.exports = EventEmitter;

// var instance = new EventEmitter();
// var counter = 5;
// instance.on('increment', function() {
//   counter++;
// }); // counter should be 0
// instance.on('increment', function() {
//   console.log(counter);
// }); // counter should be 0
// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2
