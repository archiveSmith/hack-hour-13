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

function swap(array, i1, i2) {
  array = array.slice();
  [array[i1], array[i2]] = [array[i2], array[i1]]

  return array;
}

function anagrams(string) {

  let result = [];

  result.push(string);
  
  if(string.length === 0) return result;

  string = string.split('');

  for (let i = 0; i < string.length; i += 1) {
    for(let j = 0; j < string.length-1; j += 1) {
      string = swap(string, j, j + 1)
      if(result.indexOf(string.join('')) === -1) {
        result.push(string.join(''));
      }
    }
  }
  return result;
}


module.exports = anagrams;
