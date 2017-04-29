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
  this.cache = {};
}

EventEmitter.prototype.on = function (funcName, func) {
  this.cache[funcName] = func;
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
  this.triggerCache = {};

  if (this.cache[funcName]) {
    return this.triggerCache[funcName] = this.cache[funcName](...args);
  }

  for (let key in this.triggerCache) {
    return this.triggerCache[key](...args);
  }

};

var instance = new EventEmitter();
var counter = 0;
var counter1 = 0;
instance.on('increment', function () {
  counter++;
}); // counter should be 0

instance.on('increment1', function () {
  counter1++;
});

instance.trigger('increment'); // counter should be 1
// console.log(counter);
instance.trigger('increment'); // counter should be 2
// console.log(counter);
instance.trigger('increment1');
// console.log(counter1);

module.exports = EventEmitter;