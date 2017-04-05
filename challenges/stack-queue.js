/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index += 1;
  }

  pop() {
    if (this.index > 0) {
      this.index -= 1;
      const result = this.storage[this.index];
      delete this.storage[this.index];
      return result;
    }
    return undefined;
  }

}

/**
* Queue Class
*/

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    this.inbox.push(value);
  }

  dequeue() {
    if (this.outbox.index === 0) {
      while (this.inbox.index > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }

}

module.exports = {Stack: Stack, Queue: Queue};
