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

// function anagrams(string) {
//   if (!string) return [''];
//   const array = string.split('');
  
//   function again (letters) {
//     let results = [];
//     if (letters.length <= 1) {
//       return results.concat(letters);
//     }
//     for (let i = 0; i < letters.length; i++) {
//       const front = letters[i];
//       const theRest = letters.slice(0, i).concat(letters.slice(i + 1));
//       results = results.concat(again(theRest).map(str => front + str));
//     }
//     return results;
//   }
//   // //last resort to get rid of duplicates: should be done somehow above
//   // return final = again(array).filter((item, index) => {
//   //   return again(array).indexOf(item) === index;
//   // })
//   return again(array);
// }
function anagrams (word) {
    if (word.length < 2) {
      return [word];
    } else {
      var allAnswers = [];
      for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
        var shortwordArray = allAnagrams(shorterWord);
        for (var j = 0; j < shortwordArray.length; j++) {
          allAnswers.push(letter + shortwordArray[j]);
        }
      }
      return allAnswers;
    }
}
module.exports = anagrams;
//console.log(anagrams('cats'));