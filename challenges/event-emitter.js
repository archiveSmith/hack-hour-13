function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  // store the funcNames as properties, and func as funcName's value
  this.events.funcName = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  return this.events.funcName(...args);
};

module.exports = EventEmitter;
