/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */
'use strict';

function permPalin(str) {

  if (!str) return false;

  str = str.toLowerCase();
  // if at most one of the letters has an odd number of occurences, then it can be palindromed

  // count num of occurences for each char
  const charOccurences = {};
  for (let char of str) {
    // add if char seen before
    // o.w. add to object
    (charOccurences[char]) ? charOccurences[char] += 1 : charOccurences[char] = 1;
  }

  // check if num of chars w/ odd num of occurences is less than or equal to 1
  let numOddOccurences = 0; // the number of seen chars w/ odd occurences
  for (let seenChar of Object.keys(charOccurences)) {
    // if seen char occurence odd
    if (charOccurences[seenChar] % 2) numOddOccurences += 1;

    // if more than one odd-occurring num
    if (numOddOccurences > 1) return false;
  }

  return true;
}

var results = [
  permPalin('abab'),
  permPalin('cbaba'),
  permPalin('cbac'),
  permPalin('a'),
];
console.log(results);

module.exports = permPalin;