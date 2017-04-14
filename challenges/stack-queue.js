/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	let stack = [];
	this.pop = () => { return this.stack.pop(); }
	this.push = () => { return this.stack.push(item); }
}


/**
* Queue Class
*/


function Queue() {
	let stack1 = [];
	let stack2 = [];

	this.enqueue = () => {
		if (stack1.length = 0) stack1.push(item);
		if (stack1.length !== 0) {
			let j = 0;
			let i = 0;
			while (j < stack1.length) {
				stack2.push(stack1.shift());
				j++;
			}
			stack1.push(item);
			while (i < stack2.length) {
				stack1.push(stack2.shift());
				i++;
			}
		} 
	}
	this.dequeue = () => {
		if (stack1.length = 0) { 
			return undefined 
		} else {
			return stack1.pop();
		}
	}
}

module.exports = { Stack: Stack, Queue: Queue };




