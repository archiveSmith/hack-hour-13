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
  if (str.length < 2) return true
  
  return findPerms(str).some(perm => 
    isPalindron(perm)
  )
}

function isPalindron(str) {
  return str.split('').reverse().join('') === str;
}

function findPerms(string) {
  //base case
  if (string.length < 2) return string;

  var permutations = [];

  for (var i=0; i<string.length; i++) {
    var char = string[i];

    //avoids duplicates: if char was already used, skip it
    if (string.indexOf(char) !== i) 
        continue;        

    var remainingString = string.slice(0,i) + string.slice(i+1); 

    for (var subPermutation of findPerms(remainingString))
        permutations.push(char + subPermutation)

  }
  return permutations;
}

// console.log( 'SOME A PALINDRONE_true', permPalin('abba') ) 
// console.log( 'SOME A PALINDRONE_true', permPalin2('abba') ) 
// console.log( 'SOME A PALINDRONE_true', permPalin('cbaba') ) 
// console.log( 'SOME A PALINDRONE_false', permPalin('cbac') ) 
// console.log( 'SOME A PALINDRONE_true', permPalin('a') ) 
//console.log( findPerms('abba') );

/////////////////////////////////////////////////////////////////


//if each letter is used and even amount of times, then it is a palindrone.  If there is one that is used an odd # of times, then that's okay b/c the extra letter could be the middle number in an odd length word.  But all other cases won't allow a palindrone.
function permPalin2(str) {
  let letterCount = {};

  for (let i = 0; i < str.length; i += 1) {
    letterCount[str[i]] ? delete letterCount[str[i]] : letterCount[str[i]] = 1
  }

  return Object.keys(letterCount).length <= 1;  

}

console.log( permPalin2('abbaba') )




module.exports = permPalin;