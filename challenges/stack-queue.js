/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  return this.storage[this.index]
  this.index++;
}

Stack.prototype.pop = function() {
  let removed = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return removed; 
}

////////////////////////////
function Queue() {
  this.storage = {};
  this.index = 0;
}

Queue.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
}

Queue.prototype.remove = function() {
  let removed = this.storage[0];
  for (let i = 0; i < this.index; i += 1) {
    this.storage[i] = this.storage[i + 1]
  }
  delete this.storage[this.index - 1];
  return removed;
}


//////////////////////////////////////////////////////
let stack1 = new Stack();
let stack2 = new Stack();
let queue = new Queue();
////////////////TESTING/////////////////////////////////
stack1.push('a');
console.log('STACK PUSH', stack1.push('b') );
queue.push(stack1);
stack2.push('x');
stack2.push('z');
queue.push(stack2);
//queue.remove();

//console.log('STACK', stack1); 
console.log('QUEUE', queue); 


////////////////////////////////////////////////////////

module.exports = {Stack: Stack, Queue: Queue};
