/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
'use strict';

// assuming passed in array follows array laid out by description

// O(n) time, O(n) space
function repeatNumbers1(array) {
  const seen = {};
  for (let num of array) {
    // store seen in object for O(1) lookup so that O(1) for each num makes it O(n) overall
    if (seen[num]) return num;
    else seen[num] = true;
  }
}

// if array is length n,
// we know that the numbers will go from 1 to n-1
// so if we can find the duplicate
// by finding the difference
// between the total of 1 thru n-1
// and the actual of the array to get the duplicate num
function repeatNumbers2(array) {
  const n = array.length;
  // total of 1 thru n-1
  const rangeTotal = n*(n+1)/2;
  // array total
  const actualTotal = array.reduce(sum, num => num);
  // calculate difference b/w totals to find duplicate
  return rangeTotal - actualTotal;
}

module.exports = repeatNumbers2;
