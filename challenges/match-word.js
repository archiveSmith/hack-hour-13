// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let newStr = str.toLowerCase().replace(/[_]/g, " ");
  let filtered = newStr.match(/([a-z])\w+/g);
  let wordCheck = {};
  
  for (let i = 0; i < filtered.length; i += 1) {
    //if the reverse is already present && last item of object, delete that key:value
    if (Object.values(wordCheck).indexOf(filtered[i]) > -1) {
      //return false immediately if the reverse is comparing with non-last item
      if (Object.values(wordCheck)[Object.values(wordCheck).length-1] !== filtered[i]) {
        return false;
      }
      delete wordCheck[filtered[i].split('').reverse().join('')]
    } else {
      wordCheck[filtered[i]] = filtered[i].split('').reverse().join(''); 
    }
  }
  //if any word remains, return false;
  if (Object.keys(wordCheck).length !== 0 ) return false;
  return true;
}

module.exports = matchWord;
