/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
<<<<<<< HEAD
	let stack = [];
	this.pop = () => { return this.stack.pop(); }
	this.push = () => { return this.stack.push(item); }
=======

>>>>>>> 6f456d06b55786161000e84b4c619f4a8e98c11e
}


/**
* Queue Class
*/


function Queue() {
<<<<<<< HEAD
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
=======

}

module.exports = {Stack: Stack, Queue: Queue};
>>>>>>> 6f456d06b55786161000e84b4c619f4a8e98c11e
