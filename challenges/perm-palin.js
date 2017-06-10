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
  //make obj of all letters and their count; reduce
  let dict = str.split('').reduce((obj, curr) => {
    obj[curr] ? delete obj[curr] : obj[curr] = 1;
    return obj;
  }, {});
  
  //if more than 1, then false;
  return Object.keys(dict).length <= 1;
}

//-------------------------------------
function permPalin2(str) {
  let letterCount = {};

  for (let i = 0; i < str.length; i += 1) {
    letterCount[str[i]] ? delete letterCount[str[i]] : letterCount[str[i]] = 1
  }

  return Object.keys(letterCount).length <= 1;  

}

console.log( 'SOME A PALINDRONE_true', permPalin('abba') ) 
console.log( 'SOME A PALINDRONE_true', permPalin('abba') ) 
console.log( 'SOME A PALINDRONE_true', permPalin('cbaba') ) 
console.log( 'SOME A PALINDRONE_false', permPalin('cbac') ) 
console.log( 'SOME A PALINDRONE_true', permPalin('a') ) 

/////////////////////////////////////////////////////////////////


//if each letter is used and even amount of times, then it is a palindrone.  If there is one that is used an odd # of times, then that's okay b/c the extra letter could be the middle number in an odd length word.  But all other cases won't allow a palindrone.


//////////////////////TESTING///////////////////////////
console.log( permPalin2('abbaba') )




module.exports = permPalin;