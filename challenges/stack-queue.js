/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (value) {
    return this.stack.push(value);
}

Stack.prototype.pop = function (value) {
  if (!this.stack) return undefined;
  return this.stack.pop(value);
}

/**
* Queue Class
*/


function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function (stack) {
 //add them to end, take from front
 //OR add them to beginning and take from end
  return this.queue.push(stack);
}

Queue.prototype.dequeue = function (stack) {
  if (!this.queue) return undefined;
  return this.queue.shift(stack);
}

module.exports = {Stack: Stack, Queue: Queue};
