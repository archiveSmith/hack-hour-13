/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.value = {};
  this.push = (el) => {
    if (this.max === undefined || el > this.max) this.max.push([el, this.length]);
    this.value[this.length] = el;
    this.length += 1;
    return this.length;
  }
  this.pop = () => {
    if (this.length === 0) return undefined;
    if (this.max[this.max.length - 1][1] === this.length - 1) this.max.pop();
    let value = this.value[this.length - 1];
    delete this.value[this.length - 1];
    this.length -= 1;
    return value;
  }

  this.max = [];

  this.getMax = () => {
    return this.max[this.max.length - 1][0];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();
stack.pop();
stack.push(500);
stack.push(3);
console.log(stack.getMax(), stack.length, stack.value);

module.exports = Stack;
