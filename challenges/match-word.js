// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    if (str.length === 0) return true;

    let strippedStr = str.toLowerCase().replace(/[^a-z]+/g, ' ').split(' ');
    let wordCheck = {};
    let stack = [];

    for (let i = 0; i < strippedStr.length; i += 1) {
        if (strippedStr[i].length > 0) {
            let revEle = strippedStr[i].split('').reverse().join('');
            if (stack[stack.length-1] === strippedStr[i]) {
                stack.pop();
                delete wordCheck[strippedStr[i]];
            } else {
                wordCheck[revEle] = strippedStr[i];
                stack.push(revEle);
            }
        }
    }
    return stack.length === 0;
}

console.log(matchWord('for__if__rof__fi'));

module.exports = matchWord;
