/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 function Stack() {
   this.stack = [];
 }

 Stack.prototype.push = function (value) {
   this.stack.push(value);
   return this.stack.length;
 }

 Stack.prototype.pop = function () {
   return this.stack.pop();
 }

 Stack.prototype.getMax =function () {
     var max = null;
     for (var i = 0; i < this.stack.length; ++i) {
       if (max === null || max < this.stack[i]) {
         max = this.stack[i];
       }
     }
     return max;
}

module.exports = Stack;
