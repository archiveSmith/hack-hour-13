/**
 * Create a stack.Then create a queue using two stacks.
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


/**
* Queue Class
*/

function Queue() {
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.push = function (value) {
        var len2 = this.stack2.length;
        while(len2--){
            this.stack1.push(this.stack2.pop());
        }
    return this.stack1.push(value);
}

Queue.prototype.pop = function() {
        if(this.stack2.length === 0){
          var len = this.stack1.length;
          while(len--){
            this.stack2.push(this.stack1.pop());
          }
        }
  return this.stack2.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
