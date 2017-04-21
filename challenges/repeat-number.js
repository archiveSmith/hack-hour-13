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

module.exports = repeatNumbers1;
