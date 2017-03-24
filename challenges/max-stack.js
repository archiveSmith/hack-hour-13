/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

var Stack = function(){
	this.stakLength = Object.keys(this).length;
	this.push =  function(input){
		this[this.stakLength] = input;
		this.stakLength += 1;
		return stakLength;
	};
	this.pop = function(){
		var lastElement = this[this.stakLength - 1];
		delete this[this.stakLength - 1];
		this.stakLength -= 1;
		return lastElement;
	};
	this.getMax = function(){
		return Math.max.apply(null, this);
	};
};

module.exports = Stack;