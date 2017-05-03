/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const array = [];
  this.push = (value) => {
    array.push(value);
    return array.length;
  };
  this.pop = () => array.pop();
  this.getMax = () => Math.max(...array);
}
module.exports = Stack;