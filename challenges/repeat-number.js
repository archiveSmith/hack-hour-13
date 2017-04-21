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
	let counter = {};
	array.forEach(number => {
		if(number in counter) counter[number] += 1;
		else counter[number] = 1;
	});
	for(let key in counter){
		if(counter[key] === 2) return parseInt(key);
	}
}

module.exports = repeatNumbers;
