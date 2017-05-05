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

// function EventEmitter() {
//   this.callFunc;
// }

// EventEmitter.prototype.on = function(funcName, func) {
//   this.callFunc = func;
// };

// EventEmitter.prototype.trigger = function(funcName, ...args) {
//   if(funcName = this.callFunc){
//     this.callFunc(args)
//   }
// };

//  var instance = new EventEmitter();
//  var counter = 0;
//  instance.on('increment', function() {
//   counter++;
// }); // counter should be 0
// console.log(counter)
//  instance.trigger('increment');
//  console.log(counter) // counter should be 1
//   instance.trigger('increment');
//   console.log(counter) // counter should be 2


//Set listeners and functions properties on the constructor
// With the 'on' method, add funcName and func to relevant arrays
// With trigger, loop through listeners to find match/es for funcName
// call appropriate function that matches listener
// check for additional arguments and pass any to listeners array

function EventEmitter() {
  this.listeners = [];
  this.functions = [];
}

EventEmitter.prototype.on = function (funcName, func) {
  thislisteners.push(funcName);
  this.functions.push(func);
}

EventEmitter.prototype.on = function (funcName, ...args) {
  this.listeners.forEach((el, index) => {
    if (el === funcName) this.functions[index]();ß
  })
  let args = [...arguments]; 
  for(let i = 1; i < args.length ; i ++){
    this.listeners.push(args[i]);
  }
}




module.exports = EventEmitter;