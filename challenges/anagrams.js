/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * let result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(str) {
  if (str.length === 1) {
    return str;
  }

  let permut = [];

  for (let i = 0; i < str.length; i++) {
    let s = str[0];
    let _new = anagrams(str.slice(1, str.length));
    for (let j = 0; j < _new.length; j++) {
      permut.push(s + _new[j]);
    }
    str = str.substr(1, str.length - 1) + s;
  }
  return permut;
}

module.exports = anagrams;
