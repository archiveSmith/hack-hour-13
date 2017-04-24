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
  var storageObj = {};
  array.forEach(range => {
    for (var i = range[0]; i < range[1]; i++) {
      storageObj[i] = true;
    }
  });
  var storageArr = Object.keys(storageObj);
  storageArr.sort();
  var returnArr = [];
  var tempRange = [];
  for (var j = 0; j < storageArr.length; j++) {
    if (j === 0) {
      tempRange[0] = storageArr[j];
    } else if (storageArr[j] !== storageArr[j - 1] - 1) {
      tempRange[0] = storageArr[j];
    }
    if (tempRange[0]) {
      storageArr[j]
    }
    storageArr[i];
  }
  return "woo";
}

var testArr = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(testArr));
module.exports = mergeRanges;
