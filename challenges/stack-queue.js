/**
 * Create a stack.Then create a queue using two stacks.
 */

// First in last out (FILO);
function Stack() {
  this.size = 0;
  this.storage = {};
}
// pushes input onto the stack
Stack.prototype.push = function(data) {
  let size = this.size += 1;
  this.storage[size] = data;
};

// pops input off of the stack
Stack.prototype.pop = function() {
  let size = this.size;
  let popData;
  // if size is zero this will keep it from going to a negative size.
  if (size) {
    popData = this.storage[size];
    delete this.storage[size];
    this.size -= 1;
  }
  return popData;
};


/**
* Queue Class
*/

// First in first out (FIFO);
function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}
Queue.prototype.enqueue = function(data) {
  this.inbox.push(data);
}

Queue.prototype.dequeue = function() {
  if (this.inbox.size === 0) return undefined;
  while(this.inbox.size > 0) {
    this.inbox.pop();
  }
}

let testStack = new Stack();
testStack.push("hello");
testStack.pop();
console.log(testStack);

let testQueue = new Queue;
console.log(testQueue);
// module.exports = {Stack: Stack, Queue: Queue};
