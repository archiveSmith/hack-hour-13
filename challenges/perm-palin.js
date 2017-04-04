/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true -- abba || even number of both letters
 * 	- permPalin('cbaba') => true -- abcba || even number of both letters and 1 odd letter 
 * 	- permPalin('cbac') => false -- bcca || even number of letters and 2 odd letters
 * 	- permPalin('a') => true -- a
 * 
 */

// if there are a even number of letters ==> good
// if there are a an odd number of letters ==> 1 is good, it can be in the middle
// if there are 2+ sets of odd letters, thats bad
// 
function permPalin(str) {
  countObj = {};
  stringArr = str.split("")
  console.log(stringArr);
  for (var i = 0; i < stringArr.length; i += 1) {
    if (countObj.hasOwnProperty(stringArr[i])) {
      countObj[stringArr[i]] += 1;
    } else {
      countObj[stringArr[i]] = 1;
    }
  }
  console.log(countObj);
  return null;
}

console.log(permPalin('cbaba'));

module.exports = permPalin;