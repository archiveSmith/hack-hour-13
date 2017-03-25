/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  var index = 0;
  var max = [];

  var obj = {
    
    length: 0,

  	push: function(val) {

			//set index to length in order to put val in next spot
			index = this.length;
			this[index] = val;
			//increment length to reflect new count of items in object
			this.length += 1;

			//puts val in max array if it is the biggest
			if (max.length === 0 || max[max.length - 1] <= val) {
				max[max.length] = val;
			}

			return this.length;
		},

		pop: function () {
		
			//get index of last item
			index = this.length - 1;
			//collect item
			var last = this[index];
			//shorten length to reflect new count. Shortening the length truncates the object, thereby deleting last item.
			this.length = index

			//if the one you are popping is equal to the last one in max array, take off the last one in max array
			if (last === max[max.length - 1]) {
				max.length = max[max.length - 1];
			}
			return last;
		}, 

		getMax: function () {
			return max[max.length - 1];
		}
}

module.exports = Stack;