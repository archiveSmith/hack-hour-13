/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Stack() {
  // body...
  this.stack = [];
}

Stack.prototype.push = function(element) {
  this.stack[this.stack.length] = element;
  return this.stack.length;
};

Stack.prototype.pop = function() {
  this.stack = this.stack.slice(0, -1);
  return this.stack.slice(-1);
};

Stack.prototype.getMax = function() {
  return Math.max(...this.stack);
}

module.exports = Stack;
