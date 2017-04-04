/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }
}

/**
* Queue Class
*/


class Queue {
  constructor() {
    this.queue = [];
  }

  dequeue() {
    return this.queue.pop();
  }

  enqueueStacks(element) {
    return this.queue.unshift(...element);
  }
}

let freshStack = new Stack();
freshStack.push(5);
freshStack.push(10);
let newStack = new Stack();
newStack.push(7);
newStack.push(12);

let freshQueue = new Queue();
freshQueue.enqueueStacks(freshStack.stack);
freshQueue.enqueueStacks(newStack.stack);

module.exports = {Stack: Stack, Queue: Queue};
