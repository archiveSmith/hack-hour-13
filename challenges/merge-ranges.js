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
  const ranges = [];
  array.forEach((elem) => {
    const currentRange = [];

    elem.forEach((time, i) => {
      if (!ranges.length)
      currentRange.push(i);
    });

    // if (!ranges.includes(elem[0])) {
    //   for (let i = elem[0]; i < elem[1] + 1; i += 1) {
    //     currentRange.push(i);
    //   }
    // }
    ranges.push(currentRange);
  });
  return ranges;
}


var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));

module.exports = mergeRanges;
