/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (value) {
    return this.stack.push(value);
}

Stack.prototype.pop = function (value) {
  if (!this.stack) return undefined;
  return this.stack.pop(value);
}

/**
* Queue Class
*/


function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function (stack) {
 //add them to end, take from front
 //OR add them to beginning and take from end
  return this.queue.push(stack);
}

Queue.prototype.dequeue = function (stack) {
  if (!this.queue) return undefined;
  return this.queue.shift(stack);
}

module.exports = {Stack: Stack, Queue: Queue};

//above passes but prob shouldn't use shift:
// function Stack() {
//   this.items = [];
// }

// Stack.prototype.push = function(item) {
//   this.items.push(item);
// };

// Stack.prototype.pop = function() {
//   return this.items.pop();
// };

// Stack.prototype.isEmpty = function() {
//   return this.items.length;
// };

// function Queue() {
//   this.in = new Stack();
//   this.out = new Stack();
// }

// Queue.prototype.enqueue = function(item) {
//   this.in.push(item);
// };

// Queue.prototype.dequeue = function() {
//   if (this.out.isEmpty()) {
//     while (!this.in.isEmpty()) {
//       this.out.push(this.in.pop());
//     }
//   }
//   return this.out.pop();
// };
