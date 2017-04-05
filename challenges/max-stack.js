/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(...args) {
  this.myStack = [args];

  this.push = (val) => {
    this.myStack.push(val);
    return this.myStack.length;
  }

  this.pop = () => {
    return this.myStack.pop();
  }

  this.getMax = () => {
    return Math.max.apply(Math, this.myStack);
  }

}

module.exports = Stack;