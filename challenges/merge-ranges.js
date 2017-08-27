/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
	//sort them first
	array.sort((a, b) => a[0] - b[0]);
	// return array;
	let newTimes = [];
 /*
  first sort the array, then 
  loop the array. If the if it's the first element, then push it
  next, if the first element of the subarray is greater than the last element in the pushed array, then push the sub-array
  otwherwise, replace the last element in the pushed by the first element of the sub-array(looped element in the big array)
  */
	array.forEach(function(pair){
		if(!newTimes.length || pair[0] > newTimes[newTimes.length - 1][1]){
			newTimes.push(pair);
		}
		else newTimes[newTimes.length-1][1] = pair[1];
	});
	return newTimes;
}

// or
function mergeRangesB(array) {
  let sortedArray = [...array];
  sortedArray.sort((a, b) => a[0] - b[0]);
  let newPairs = [];

  sortedArray.forEach((pair) => {
    if(newPairs.length === 0 || pair[0] > newPairs[newPairs.length-1][1]) newPairs.push(pair);
    else newPairs[newPairs.length-1][1] = pair[1];
  });
  return newPairs;
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
let result = mergeRanges(times); //-> [[0, 1], [3, 8], [9, 12]]

console.log('check the result,', result);

module.exports = mergeRanges;
