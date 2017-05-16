// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true
'use strict';
function matchWord(str) {


    if (!str) return true;

    const letterStack = [];
    let   lastLetterIndex;
    for (let i = 0; i < str.length; i += 1) {
        let char = str[i];
        // if char is letter
        if (/[a-z]/i.test(char)) {
            char = char.toLowerCase();

            // if letterStack has anything and last letter on stack matches current
            if (letterStack.length && char === letterStack[letterStack.length - 1]) {
                // if current and last letter are next to each other
                if (i === lastLetterIndex + 1) {
                    return false;
                }
                letterStack.pop();
            } else {
                lastLetterIndex = i;
                letterStack.push(char);
            }
        }
    }
    return !letterStack.length;
}

// console.log(matchWord('__END_DNE-----')); // true
// console.log(matchWord('__ENDDNE__') );    // false
// console.log(matchWord('IF()()fi[]') );    // true
// console.log(matchWord('for__if__rof__fi') );  // false
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')  ); // true
// console.log(matchWord('')); // true

module.exports = matchWord;
