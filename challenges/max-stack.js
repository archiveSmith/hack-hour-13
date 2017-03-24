/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
	constructor() {
		this.store = {};
		this.index = 0;
	}

	push(val) {
		this.store[this.index] = val;
		this.index += 1;
		return this.index;
	}

	pop() {
		if (this.index > 0) {
			this.index -= 1;
			const popped = this.store[this.index];
			delete this.store[this.index];
			return popped;
		}
		return undefined;
	}

	// getMax() {
	// 	const keys = Object.keys(this.store);
	// 	const i = keys.reduce((a, b) => (this.store[a] > this.store[b]) ? a : b);
	// 	return this.store[i];
	// }

	getMax() {
    const values = Object.values(this.store);
    return Math.max.apply(null, values);
  }

}

module.exports = Stack;