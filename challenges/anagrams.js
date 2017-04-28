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
  let collect = [];
  let combo = '';
  
  if (collect.length === str.length * (str.length - 1)) 
    return collect;
    
  for (var i = 0; i < str.length; i++) {
    combo = str[i] + str.slice(0, i) + str.slice(i + 1);
    collect.push(combo);
  }
  return collect;
}

module.exports = anagrams;
