// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
let newStr = str.replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '');
newStr = newStr.replace(/[^\w\s]/g, "").toLowerCase();

arr = newStr.split('_');
let test1 = arr[0];
let test2 = arr[1];

test1 = test1.split('').reverse().join('');
test2 = test2.split('').join('');

return test1 === test2;
}



module.exports = matchWord;
