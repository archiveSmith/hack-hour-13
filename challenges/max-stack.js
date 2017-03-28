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
}

let arr = new Stack();

Stack.prototype.push = function() {
  this.contents[this.length] = this.length;
  this.length += 1;
  return this.length;
}

Stack.prototype.pop = function() {
  let keys = this.contents.keys();
}

Stack.prototype.getMax = function() {

}

module.exports = Stack;