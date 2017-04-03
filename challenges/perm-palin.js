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
  //split and rever the string. 
  //loop string grabbing the first two values and see if that is found in the rever string
  //if so, return true; 
  //return false; 

  if (str.length === 1) return console.log(true);
  let reverseStr = str.split("").reverse().join("")
  for (let j = 0; j < str.length; j++)
    for (let i = j + 1; i <= str.length; i++) {
      console.log(reverseStr, str.slice(0, i))
      if (reverseStr.includes(str.slice(0, i))) return console.log(true);
    }
  return console.log(false);
}
permPalin('abab')// => true
permPalin('cbaba') //=> true
permPalin('cbac')// => false
permPalin('a')// => truemodule.exports = permPalin;