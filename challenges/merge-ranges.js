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
  array.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = [[0, 0]];
  for (let i = 0; i < array.length - 1; i += 1) {
    let lower = array[i][0];
    let upper = array[i][1];
    if (result[result.length - 1][1] >= lower) {
      lower = result[result.length - 1][0];
      if (result[result.length - 1][1] >= upper) {
        upper = result[result.length - 1][1];
      }
      result.pop();
    }
    if (upper >= array[i + 1][0] && upper < array[i + 1][1]) {
      upper = array[i + 1][1];
      i += 1;
    }
    result.push([lower, upper]);
  }
  return result;
}

module.exports = mergeRanges;
