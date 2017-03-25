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

  this.pop = () => {
    if (this.index === 0) return undefined;
    const elem = this.stac[this.index - 1];
    delete this.stac[this.index - 1];
    this.index -= 1;
    return elem;
  };

  this.push = (val) => {
    this.stac[this.index] = val;
    this.index += 1;
    return this.index;
  };

  this.getMax = () => {
    const stacKeys = Object.keys(this.stac);

    return stacKeys.reduce((acc, curr) => {
      return this.stac[acc] > this.stac[curr] ? acc : curr;
    });
  };
}

module.exports = Stack;

// function Stack() {
//   this.stac = {};
//   this.index = 0;
//   this.max;
//
//   this.pop = () => {
//     if (this.index === 0) return undefined;
//     const elem = this.stac[this.index - 1];
//     delete this.stac[this.index - 1];
//     this.index -= 1;
//     return elem;
//   };
//
//   this.push = (val) => {
//     if (this.stac[this.index - 1][this.max] < val) {
//       this.stac[this.index - 1] = this.max = val;
//     } else {
//       this.stac[this.index] = this.max
//     }
//     this.stac[this.index] = this.max = val;
//     this.index += 1;
//     return this.index;
//   };
//
//   this.getMax = () => {
//     this.max;
//   };
// }
