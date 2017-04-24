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

let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

function mergeRanges(array) {
  if (!Array.isArray(array)) return console.log('invalid input');

  // sort the array of ranges
  array.sort((a, b) => {
    return a[0] - b[0];
  });

  const result = [];
  // iterate through array
  // if result array is empty or if first index of current array is greater than
  // the last array's second index in result array then push range to result.
  // otherwise the last array's last element in result set equal to current array's
  // last index value.
  array.forEach((range) => {
    if (!result.length || range[0] > result[result.length - 1][1]) {
      result.push(range)
    } else {
      result[result.length - 1][1] = range[1];
    }
  });
  return result;
}

module.exports = mergeRanges;
