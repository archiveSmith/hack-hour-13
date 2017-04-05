/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	if (!arr.length || arr.length < 2) { return false }
	if (n === null) { return false }
	
	for (let i = 0; i < arr.length; i++) {
	  for (let j = 1; j < arr.length; j++) {
	    if (arr[i] + arr[j] == n) {
	      return true;
	    }
	  }
	}
	return false;
}
module.exports = twoSum;
