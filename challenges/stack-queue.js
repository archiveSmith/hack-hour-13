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
  this.new = new Stack();
  this.old = new Stack();
}

Queue.prototype.size = function() {

}

Queue.prototype.enqueue = function() {

}

Queue.prototype.dequeue = function() {

}

let testStack = new Stack();
testStack.push("hello");
testStack.pop();
console.log(testStack);

let testQueue = new Queue;
console.log(testQueue);
// module.exports = {Stack: Stack, Queue: Queue};
