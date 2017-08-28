/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

 // o(n) time and o(n) space
function uniqueNumber(array) {
	let counter= {};
	for(let number of array){
		if(counter[number]){
			counter[number] += 1;
		}
		else{
			counter[number] =1;
		}
		
	}
	for(let key in counter){
		if(counter[key] === 1){
			return key
		}
	}
// o(n)time, and  O(1) space with the XOR operator
	function uniqueNumber(array) {
		return array.reduce((res, num) => res ^ num);
	}

}

module.exports = uniqueNumber;
