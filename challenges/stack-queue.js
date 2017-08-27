/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(input) {
  this.storage[this.length] = input;
  this.length += 1;
}

Stack.prototype.pop = function() {
  if(this.length === 0) return undefined;
  let last = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length --;
  return last;
}

/**
* Queue Class
*/
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();

}

Queue.prototype.enqueue = function(value) {
	this.stack1.push(value);
};

Queue.prototype.dequeue = function() {
  if(this.stack2.length === 0){
  	while(this.stack1.length > 0){
  		this.stack2.push(this.stack1.pop());
  	}
  }
  return this.stack2.pop();
};

module.exports = {Stack: Stack, Queue: Queue};

let test = new Queue();
test.enqueue('a');
test.enqueue('b');
let ans  = test.dequeue();
console.log('there ya go ', ans );

