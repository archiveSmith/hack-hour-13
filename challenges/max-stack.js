/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.stack = val; 
  this.length += 1; 
  return this.stack.length; 
}

Stack.prototype.pop = function(){
  let poppedOff = this.stack[0]
  this.stack = this.stack.slice(1, this.stack.length);
  console.log(this.stack)
  return poppedOff;
}

Stack.prototype.getMax = function(){
  this.stack.reduce((acc, currentEl)=>{
    if(currentEl > acc) acc = currentEl
    return acc; 
  })
}
//console.log("testing ideas", [9,10].slice(1,2))
let newStack = new Stack; 
//console.log(newStack)
newStack.push(9)
newStack.push(10)
console.log(newStack.pop())
//console.log(newStack)
//console.log(newStack.getMax())
module.exports = Stack;