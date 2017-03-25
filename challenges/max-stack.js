/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.items = {};
    this.length = 0;
    this.max = -Infinity;
  }

  push(item) {
    if (item > this.max) this.max = item;

    this.items[this.length] = item;
    this.length += 1;
    return this.length;
  }

  pop() {
    var popped;
    if (this.length > 0) {
      this.length -= 1;
      popped = this.items[this.length];
      delete this.items[this.length];

      // if delete the max, look for it again
      if (popped === this.max) {
        this.max = -Infinity;
        for (var i = 0; i < this.length; i += 1) {
          if (this.items[i] > this.max) this.max = this.items[i];
        }
      }
    }
    return popped;
  }

  getMax() {
    return this.max;
  }

}

module.exports = Stack;

// var stk = new Stack();
// stk.push(100);
// stk.push(20000);
// stk.push(3);
// stk.pop();

// console.log('Items:', stk.items);
// console.log('Max: ' + stk.getMax());