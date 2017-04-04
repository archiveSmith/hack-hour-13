/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack() {
   this.storage = {};
   this.index = 0;
 }

 Stack.prototype.push = function(value) {
   let start = this.index;
   for (let i = start; i < (start + arguments.length); i += 1) {
     this.storage[i] = arguments[i - start];
     this.index += 1;
   }
   return this.index;
 };

 Stack.prototype.pop = function() {
   this.index -= 1;
   if (this.length < 0) this.index = 0;
   const value = this.storage[this.index];
   delete this.storage[this.index];
   return value;
 };

/**
* Queue Class
*/


/**
* Queue Class
*/


function Queue() {
  this.inStack = new Stack();
  this.outStack = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.inStack.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.outStack.index === 0) {
    while (this.inStack.index > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
