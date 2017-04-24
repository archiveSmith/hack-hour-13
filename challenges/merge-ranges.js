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
	let res = [];

	array.sort((function (index) {
		return function (a, b) {
			return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
		};
	})(0));


	for (let i = 1; i < array.length; i++) {
		if (array[i - 1][1] > array[i][0]) {
			array[i - 1][1] = array[i][1];
		}
		res.push(array[i]);
	}
	return res;
}

module.exports = mergeRanges;
