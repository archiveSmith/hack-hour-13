/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
}

Stack.prototype.push = function (x) {
  this.storage.push(x);
}

Stack.prototype.pop = function () {
  return this.storage.pop();
}

/**
* Queue Class
*/

function Queue() {
  var inbox = new Stack();
  var outbox = new Stack();
}

Queue.prototype.enqueue = function (x) {
  inbox.push(x);
}

Queue.prototype.dequeue = function () {
  if (output.storage.length === 0) {
    while (inbox.storage.length !== 0) {
      outbox.push(inbox.pop())
    }
  }
  return output.pop();
}

var queue = new Queue();
console.log();

module.exports = { Stack: Stack, Queue: Queue };