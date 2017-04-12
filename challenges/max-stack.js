/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};

Stack.prototype.pop = function() {
  if (this.storage.hasOwnProperty('0')) {
    let popValue = this.storage[this.index - 1];
    delete popValue;
    this.index--;
    return popValue;
  } else {
    return undefined;
  }
};

Stack.prototype.getMax = function() {
  let max = this.storage[0];
  if (!this.storage.hasOwnProperty('0')) return undefined;
  for (key in this.storage) {
    if (this.storage[key] > max) {
      max = this.storage[key];
    }
  }
  return max;
}


module.exports = Stack;