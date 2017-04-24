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
	let newTimes = [];

	array.forEach(function(pair){
		if(!newTimes.length || pair[0] > newTimes[newTimes.length - 1][1]){
			newTimes.push(pair);
		}
		else newTimes[newTimes.length-1][1] = pair[1];
	});
	return newTimes;
}

module.exports = mergeRanges;
