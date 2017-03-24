/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let stack = [];
  let length = 0;
  
  let push = function(val) {
    stack[stack.length] = val; 
    length++;
    return length;
  };
  
  let pop = function() {
    let result = stack[stack.length - 1];
    delete stack[stack.length - 1];
    length--;
    return result;
  };
  
  let getMax = function() {
    return stack.reduce((max, curr) => {
      if (curr > max) {
        max = curr;
      }
      return max;
    }, 0);
  };
}

module.exports = Stack;