/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let stack = [], length = stack.length;

  stack.push = function(val){
    stack[length] = val;
    length += 1;
    return length;
  };
  stack.pop = function(){
    let last = stack[length - 1];
    let stackCopy = [];
    for (let i = 0; i < stack.length - 1; i += 1) {
      stackCopy.push(stack[i]);
    }
    return last;
  };
  stack.getMax = function(){
    let result = 0;
    for (let i = 0; i < stack.length; i += 1) {
      if (stack[i] <= stack[i + 1]) {
        result = stack[i + 1];
      } else {
        result = stack[i];
      }
    }
    return result;
  }
}

module.exports = Stack;