/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
<<<<<<< HEAD
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		if (arr.includes(array[i])) {
			return array[i];
		}
		arr.push(array[i]);
	}
	return undefined;
=======

>>>>>>> c2d38f0015935c6b49db0f63bf4b854eda4613f6
}

module.exports = repeatNumbers;
