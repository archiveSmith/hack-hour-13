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
  let result = [];
  let extras = [];
  array.sort((a, b) => a[0] - b[0])
  .reduce((a, b) => {
    if (a[1] >= b[0]) {
      extras.push([a[0], b[1]]);
      return [a[0], b[1]];
    }
    result.push(a);
    return b;
  }, [0, 0]);
  result.push(extras[extras.length-1]);
  return result;
}

module.exports = mergeRanges;
