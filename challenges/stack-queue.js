/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.items = {};
  this.length = 0;
}
Stack.prototype.push = function(item) {
  this.items[this.length++] = item;
  return this.length;
}
Stack.prototype.pop = function(item) {
  if (this.length < 1) return null;

  this.length--;
  var popped = this.items[this.length];
  delete this.items[this.length];
  return popped;
}

/**
* Queue Class
*/

function Queue() {
  this.addStack = new Stack;
  this.rmvStack = new Stack;
}
Queue.prototype.enqueue = function (item) {
  this.addStack.push(item);

  // create new reverse stack for dequeueing
  this.rmvStack = new Stack;
  var queueLen = this.addStack.length;
  for (var i = queueLen - 1; i >= 0; i--) {
    this.rmvStack.push(this.addStack.items[i]);
  }
}
Queue.prototype.dequeue = function () {
  // remove item at front
  var removed = this.rmvStack.pop();

  // create new reverse stack for enqueueing
  this.addStack = new Stack;
  var queueLen = this.rmvStack.length;
  for (var i = queueLen - 1; i >= 0; i--) {
    this.addStack.push(this.rmvStack.items[i]);
  }
  return removed;
}

module.exports = {Stack: Stack, Queue: Queue};
