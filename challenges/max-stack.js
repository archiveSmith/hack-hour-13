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
  return this.storage.pop();
}

Stack.prototype.getMax = function () {
  if (this.storage.length === 1) return this.storage[0];
  if (this.storage.length === 0) return undefined;
  var max = [];
  max[0] = this.storage[0];
  for (let i = 1; i < this.storage.length; i += 1) {
    if (this.storage[i] > max[i]) {
      max[i] = this.storage[i];
    } else {
      max[i] = max[i - 1];
    }
  }
  console.log(max);
  return max[max.length];
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.storage);
console.log(myStack.getMax());

module.exports = Stack;