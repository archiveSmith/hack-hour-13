/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams (string, begOfStr = '') {
  if (string.length === 0) return [''];  
  if (string.length === 1) return begOfStr + string;
  let strPerms = [];
  for (let i = 0; i < string.length; i += 1) {
    // add to begOfStr the first letter of string
    let restOfStr = string.slice(0, i) + string.slice(i + 1);
    // iterate through restOfStr, and have it append all combinations of itself
    // send down the currently working letter in restOfStr and
    // add to begOfStr
    strPerms = strPerms.concat(anagrams(restOfStr, begOfStr + string[i]));
  }
  return strPerms;
}

module.exports = anagrams;
