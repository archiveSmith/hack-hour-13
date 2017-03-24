/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const stack = {};
  let length = 0;
  let max = -Infinity;
  this.push = (value) => {
    let key = length
    if (value > max) max = value;   
    stack[key] = { value: value, max : max } ;
    length +=1;
    console.log(stack);
    return length;
  }
  this.pop = () => {
    let key = length;
    let popped = stack[key - 1];
    delete stack[key-1];
    length -= 1;
    //console.log(stack, ' ', length);
    return popped;
  }
  this.getMax = () => {
    return stack[length-1].max;
  }
}

// let st = new Stack()
// console.log(st.push(45));
// console.log(st.push(89));
// console.log(st.push(23));
// console.log(st.push(834));
// console.log(st.push(34));
// st.pop();
// st.pop();
// console.log(st.getMax());


module.exports = Stack;