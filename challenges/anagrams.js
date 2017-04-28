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
  if (string.length === 0) return string;
  const arr = string.split('').filter(char => char.toLowerCase() !== char.toUpperCase());
  if (arr.length = 1) return arr;
  const output = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = arr.length - 1; j > 0; j -= 1) {
      const str = arr.join('');
      if (!output.includes(str)) output.push(str);
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return output;
}

module.exports = anagrams;

console.log(''.split(''))