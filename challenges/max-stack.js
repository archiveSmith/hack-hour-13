/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.entries = {};
  this.max = -Infinity;
  this.push = (item) => {
    if (item > this.max) this.max = item;
    this.entries[this.length] = item;
    return ++this.length;
  };
  this.pop = () => {
    if (this.length > 0) {
      const removed = this.entries[this.length - 1];
      if (removed === this.max) {
        this.max = -Infinity;
        Object.keys(this.entries).forEach((key) => {
          if (this.entries[key] > this.max) this.max = this.entries[key];
        });
      }
      delete this.entries[--this.length];
      return removed;
    }
  };
  this.getMax = () => {
    return this.length === 0 ? undefined : this.max;
  };
}

module.exports = Stack;