/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
}

Stack.prototype.push = function (value) {
  this.storage.push(value);
}

Stack.prototype.pop = function () {
  this.storage.pop(value);
}

Stack.prototype.getMax = function () {
  if (this.storage.length === 1) return this.storage[0];
  var max = [];
  for (let i = 0; i < this.storage.length; i += 1) {
    this.storage[i+1] > this.storage[i] ? max[i] = this.storage[i+1] : max[i]
  }
};

module.exports = Stack;