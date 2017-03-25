/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
  this.max = -Infinity;
}

Stack.protoype.push = () => {
  let argsLen = arguments.length;

  for (let i = 0; i < argsLen; i += 1) {
    this.contents[this.length] = arguments[i];
    this.length++;
    if (arguments[i] > this.max) this.max = arguments[i];
  }

  return this.length;
}

Stack.prototype.pop = () => {
  let last = this.contents[this.length - 1];
  this.length -= 1;
  this.max = this.contents[0];
  for(let i = 0; i<Objects.keys(this.contents).length; i += 1) {
    if(this.contents[i] > this.max) this.max = this.contents[i];
  }
  return last;
}

Stack.prototype.getMax = () => {
  return this.max;
}

module.exports = Stack;