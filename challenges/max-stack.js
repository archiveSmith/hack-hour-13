/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value; 
  this.index++;
  return this.index;
}

Stack.prototype.pop = function() {
  let removed = this.storage[this.index -1];
  delete this.storage[this.index -1];
  this.index--
  return removed;
}

Stack.prototype.getMax = function() {
  let max = 0;
  for (index in this.storage) {
    if (this.storage[index] > max) {
      max = this.storage[index];
    }
  }
  return max; 
}



//==================TESTING============================

let stack = new Stack(); 
console.log( stack.push(11) )
console.log( stack.push(2) )
console.log( stack.push(99) )
console.log( stack.push(33) )
console.log( stack.pop() )
console.log( stack.pop() )
console.log( stack.getMax() )
console.log( stack ); 

module.exports = Stack;