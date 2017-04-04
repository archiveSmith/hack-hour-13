/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.stack[this.length] = val;
  this.length += 1;
  return this.length;
}

Stack.prototype.pop = function() {
  let popped = this.stack[this.length - 1];
  delete this.stack[this.length - 1];
  this.length -= 1;
  return popped;
}

Stack.prototype.unshift = function (val) {
  this.length += 1;
  let before = this.stack[0];

  this.stack[0] = val;

  for (let i = 1; i < this.length; i += 1) {
    let curr = this.stack[i];
    this.stack[i] = before;
    before = curr;
  }
}

Stack.prototype.shift = function() {
  let shifted = this.stack[0];
  this.length -= 1;

  for (let i = 0; i < this.length; i += 1) {
    this.stack[i] = this.stack[i + 1];
  }

  delete this.stack[this.length];

  return shifted;
}


/**
* Queue Class
*/

function Queue() {
 this.queue = new Stack();
}

Queue.prototype.enqueue = function(val) {
  return this.queue.unshift(val);
}

Queue.prototype.dequeue = function() {
  return this.queue.shift();
}


module.exports = { Stack: Stack, Queue: Queue };
