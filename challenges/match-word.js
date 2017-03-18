// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.


function matchWord(str) {
  let words = str.match(/[a-z]*/gi).filter(x => x.length > 0).map(x => x.toLowerCase()); 
  let stack = [];
  let stored = {};
  for (let i = 0; i < words.length / 2; i++) {
    stored[words[i]] = words[i].split('').reverse().join('')
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i] === stack[stack.length -1]) {
      stack.pop(); 
    } else if (words[i] in stored) {
      stack.push(stored[words[i]])
    }
  }
  return stack.length === 0; 
}

/*
identify all the words used
put them and their reverse in an object. only go thru half of words 
loop thru them like balanced parens problem pushing on stack and popping off if found
*/


//==================TESTING================================

console.log(matchWord('__END_DNE-----')); // true
console.log(matchWord('__ENDDNE__')); // false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //true
console.log(matchWord(''));  //true











module.exports = matchWord;

