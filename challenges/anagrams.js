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

function anagrams(string) {
  if (string.length === 1) return string;
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    let start = string[0];
    let holder = anagrams(string.substr(1));
    for (let j = 0; j < holder.length; j += 1) {
      result.push(holder[j] + start);
    }
    string = string.substr(1) + start;
  }
  return result;
}

module.exports = anagrams;
