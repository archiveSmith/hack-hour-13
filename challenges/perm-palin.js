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

console.log( 'SOME A PALINDRONE_true', permPalin('abba') ) 
console.log( 'SOME A PALINDRONE_true', permPalin2('abba') ) 
console.log( 'SOME A PALINDRONE_true', permPalin('cbaba') ) 
console.log( 'SOME A PALINDRONE_false', permPalin('cbac') ) 
console.log( 'SOME A PALINDRONE_true', permPalin('a') ) 
//console.log( findPerms('abba') );

//see if odd match 
function permPalin2(str) {
  
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}






module.exports = permPalin;