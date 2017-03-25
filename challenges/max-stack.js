/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = new Object();
  this.max = new Object();
  this.length = 0;
}

Stack.prototype.push = function (value) {
  let max = value > this.max[this.length - 1] ? value : this.max[this.length - 1];
  this.max[this.length] = max;

  this.stack[this.length] = value;
  this.length += 1;
  return this.length;
}

Stack.prototype.pop = function () {
  delete this.max[this.length.toString()];

  let poppedElement = this.stack[this.length - 1];
  delete this.stack[this.length.toString()];
  this.length -= 1;
  return poppedElement;
}

Stack.prototype.getMax = function () {
  return this.max;
}

module.exports = Stack;