/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = new Array();
  this.length = 0;

  this.push = function(value) {
    this.stack[this.length] = value;
    this.length += 1;
    return this.length;
  }

  this.pop = function() {
    let poppedElement = this.stack[this.length - 1];
    this.length -= 1;
    return poppedElement;
  }

  this.getMax = function() {
    return Math.max(...this.stack);
  }
}

module.exports = Stack;