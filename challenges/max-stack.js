/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.array = [];
  this.max = [];
  return {
    push: (val) => {
      this.array.push(val);
      let max = val < this.max[this.max.length-1] ? this.max[this.max.length - 1] : val;
      this.max.push(max);
      return this.array.length;
    },
    pop: () => {
      return this.array.pop();
    },
    getMax: () => {
      // return this.array.length === 0 ? undefined : Math.max(...this.array);
      return this.max[this.max.length - 1];
    }
  }
}

module.exports = Stack;