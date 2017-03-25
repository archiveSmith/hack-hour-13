/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(element) {
  let stack = new Array();

  this.push = (element) => {
    if (stack.length === 0) {stack[0] = element; return stack.length;}
    else {stack[stack.length] = element; return stack.length;}
  }

  this.pop = () => {
    if (stack.length === 0) {return undefined;}
    else {let removed = stack.splice(stack.length - 1, 1); return removed;}
  }

  this.getMax = () => {
    if (stack.length === 0) {return undefined;}
    let max = Math.max(...stack);
    return max;
  }
}


module.exports = Stack;