/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
 'use strict';

function subsetSum(array, target) {
	// either length of 1 --> just check each num
	// or length of array length --> check whole sum

	if (!array.length) return false;
	if (array[0] === target || array.reduce((sum, num) => sum + num) === target) return true;
	
	return subsetSum(array.slice(1), target) || subsetSum(array.slice(1), target - array[0]);

}

const my = require('./myLibrary');
my.testCase(subsetSum([2], 3), false);
my.testCase(subsetSum([2], 2), true);
my.testCase(subsetSum([2, 3], 2), true);
my.testCase(subsetSum([2, 3], 3), true);
my.testCase(subsetSum([2, 3], 5), true);
my.testCase(subsetSum([8, 2, 4, 12], 13), false);
my.testCase(subsetSum([8, -2, 1, -3], 6), true);

module.exports = subsetSum;
