/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {}
  this.index = 0;
}

Stack.prototype.push = function(value){
  this.storage[this.index] = value; 
  this.index += 1; 
}

Stack.prototype.pop = function(){
  this.
}

/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
