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

function rNumber(collection) {
	// the total sum of the number from 1 to the last one not including the repeated nuber is
	// equal to mutiplying the length of the collection times the length - 1 and divide this product by 2
	let expectedSum = [(collection.length - 1) * collection.length] / 2;
	
	//add up the numbers in the collection, the difference between the expcetedSum and the actualSum is the repeated number
	let actualSum = collection.reduce((acum, next) => acum + next);
	return actualSum - expectedSum;
}
const a = [1,2,2,3,4];
console.log('check with first solutions,', repeatNumbers(a));
console.log('check with second soution,', rNumber(a));

module.exports = repeatNumbers;
