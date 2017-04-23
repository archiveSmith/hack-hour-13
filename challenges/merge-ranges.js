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
  //start by putting first one in array:
  let ranges = [sorted[0]];
 
  for (let i = 1; i < sorted.length; i += 1) {
    //handles overlapping times
    if ((ranges[ranges.length - 1][0] < sorted[i][0]) && (ranges[ranges.length - 1][1] < sorted[i][1]) && (ranges[ranges.length - 1][1] >= sorted[i][0])) {
        let merge = [ranges[ranges.length - 1][0], sorted[i][1]];
        ranges[ranges.length - 1] = merge;
    //skips over inclusive times
    } else if ((ranges[ranges.length - 1][0] < sorted[i][0]) && (ranges[ranges.length - 1][1] > sorted[i][0]) && (ranges[ranges.length - 1][1] > sorted[i][1])) {
        continue;
    //adds them to array if neither
    } else {
        ranges = ranges.concat([sorted[i]]);
    }  
  }
  return ranges;
}

module.exports = mergeRanges;
