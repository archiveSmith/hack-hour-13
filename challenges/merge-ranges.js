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
  // i'll call each array item a meeting, defined by start and end
  // meetings are mergeable if one meeting's start or end
  // is within the range (inclusive) of the other's times
  // the new meeting's start and end becomes the earliest and latest times, respectively

}

module.exports = mergeRanges;
