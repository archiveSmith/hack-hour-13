/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (value) {
    this.stack.push(value);
}

Stack.prototype.pop = function (value) {
  this.stack.pop(value);
}

/**
* Queue Class
*/


function Queue() {
  this.Queue = [];
}

Queue.prototype.push = function (stack) {
 //add them to end, take from front
 //OR add them to beginning and take from end
  this.queue.push(stack);
}

Queue.prototype.shift = function (stack) {
  this.queue.shift(stack);
}

module.exports = {Stack: Stack, Queue: Queue};
