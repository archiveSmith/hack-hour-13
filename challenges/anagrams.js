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

//   const permutator = (inputArr) => {
//   let result = [];

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m)
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next))
//      }
//    }
//  }

//  permute(inputArr)

//  return result;
// }
// function anagrams(string) {
//   let result = []; 
//   if(string.length < 2) return string; 
//   function myFunc()
//   for(let i =0; i < string.length; i++){
//     let char = string[i]
 
//     let remainingString = string.slice(0,i) + string.slice(i + 1, string.length);

//     anagrams(remainingString)
//       result.push(char + remainingString)
//   }
  
//   return console.log("this", result);
// }

// anagrams("abc");


function anagrams(string) {
  const arr = string.split('');
  function recurse(letters) {
    let results = [];
    if (letters.length <= 1) return results.concat(letters);
    for (let i = 0; i < letters.length; i += 1) {
      const front = letters[i];
      const restOfLetters = letters.slice(0, i).concat(letters.slice(i + 1));
      results = results.concat(recurse(restOfLetters).map(str => front+str));
    }
    return results;
  }
  return recurse(arr);
}
module.exports = anagrams;
