// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    str = str.replace(/[\W_]/g, ' ').replace(/ +/g," ").trim().toLowerCase().split(' ');
    let testArr = [];
    for (let i = 0; i < str.length; i += 1) {
        if (testArr.length === 0) {
        testArr.push(str[i].split('').reverse().join(''))
        } else if (testArr[testArr.length - 1] !== str[i]) {
          testArr.push(str[i].split('').reverse().join(''))  
        } else if (testArr[testArr.length - 1] == str[i]) {
          testArr.pop();
        }
    }
    return testArr.length === 0;
}
// module.exports = matchWord;
