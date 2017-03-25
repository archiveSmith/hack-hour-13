/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stac = {};
  this.index = 0;
  this.max;

  this.pop = () => {
    if (this.index === 0) return undefined;
    const elem = this.stac[this.index - 1];
    delete this.stac[this.index - 1];
    this.index -= 1;
    return elem;
  };

  this.push = (val) => {
    if (this.stac[this.index] < val) {
      this.max = val;
    } else {
      this.max = this.stac[this.index];
    }

    this.stac[this.index] = val;
    this.index += 1;
    return this.index;
  };

  this.getMax = () => {
    return this.max;
  };
}

module.exports = Stack;
