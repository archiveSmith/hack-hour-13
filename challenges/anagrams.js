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
  // base case as well as accounting for empty string
  if (string.length <= 1) {
    return [string];
  }
  
  // list of permutations
  const permutations = [];

  // first letter of permutation branches
  for (let first = 0; first < string.length; first += 1) {
    const firstChar = string[first];
    
    // new string w/o firstChar
    const otherChars = string.slice(0, first) + string.slice(first + 1);
    
    // permutations using other chars after first letter
    const otherPerms = anagrams(otherChars);
    
    // permutations now with first char
    const permsWithFirstChar = otherPerms.map(perm => firstChar + perm);
    
    // add to permutations
    permutations.push(...permsWithFirstChar);
  } 

  return permutations;
}

// note: num of permutations = n!, where n = string length
// time complexity may also be n!

module.exports = anagrams;
