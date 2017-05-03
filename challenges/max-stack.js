/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 function Stack() {
   this.storage = {};
   // this.sorted = {};
   this.sorted = [];
   this.index = 0;
 }

 Stack.prototype.push = function(value) {
   let start = this.index;
   // this.sorted[this.index] = value;
   for (let i = start; i < (start + arguments.length); i += 1) {
     this.storage[i] = arguments[i - start];
     this.index += 1;
   }
   if(value) this.sorted.push(value);
   this.sorted.sort((a,b) => a-b);
   return this.index;
 };

 Stack.prototype.pop = function() {
   this.index -= 1;
   if (this.length < 0) this.index = 0;
   const value = this.storage[this.index];
   delete this.storage[this.index];
   return value;
 };

 Stack.prototype.getMax = function() {
   return this.sorted[this.index-1];
 };

module.exports = Stack;
