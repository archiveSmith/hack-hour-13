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
  let sorted = array.sort((a, b) => a[0] - b[0]);
  let ranges = []
  for(let i = 0; i < sorted.length - 1; i += 1) {
    if ((sorted[i][0] < sorted[i + 1][0]) && (sorted[i][1] < sorted[i + 1][1]) && (sorted[i][1] >= sorted[i + 1][0])) {
      let range = [sorted[i][0], sorted[i + 1][1]];
      ranges = ranges.concat([range]);
      i += 1;
    } else
       ranges = ranges.concat([sorted[i]]);
    }
    return ranges;
}

module.exports = mergeRanges;
