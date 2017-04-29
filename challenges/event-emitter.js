'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
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
  this.callFunc;
}

EventEmitter.prototype.on = function(funcName, func) {
  this.callFunc = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if(funcName = this.callFunc){
    this.callFunc(args)
  }
};

 var instance = new EventEmitter();
 var counter = 0;
 instance.on('increment', function() {
  counter++;
}); // counter should be 0
console.log(counter)
 instance.trigger('increment');
 console.log(counter) // counter should be 1
  instance.trigger('increment');
  console.log(counter) // counter should be 2


module.exports = EventEmitter;