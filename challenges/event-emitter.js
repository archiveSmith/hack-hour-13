function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  // store the funcNames as properties, and func as funcName's value
  this.events[funcName] ? this.events[funcName].push(func) : this.events[funcName] = [func];
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.events[funcName].forEach(e =>  e(...args));
};

module.exports = EventEmitter;
