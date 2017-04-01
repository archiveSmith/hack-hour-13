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

 function permPalin(str) {
   str = str.toLowerCase();
 	const charFreqs = {};
  let odds = 0;
  str.split('').forEach(char => {
     if (charFreqs[char]) charFreqs[char] += 1;
     else charFreqs[char] = 1;
   });
   Object.keys(charFreqs).forEach(char => {
     if (charFreqs[char] % 2) odds += 1;
   });
   return odds < 2;
 }

module.exports = permPalin;
