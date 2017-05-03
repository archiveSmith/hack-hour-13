// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (typeof str !== 'string') return false;
  let history = ['P14C3H01D3R'];
  let saver = '';
  str = str.toLowerCase();

  for (let i = 0; i < str.length + 1; i += 1) {
    if (str[i] && str[i].match(/[a-zA-Z]/i)) {
      saver += str[i];
      // console.log(str[i]);
    } else if (saver.length > 0) {
      let reverseSaver = saver.split('').reverse().join('');
      // console.log(reverseSaver);
      for (let i = 0; i < history.length; i += 1) {
        if (history[i] === reverseSaver) {
          history.pop();
          saver = '';
          break;
        } else if (i === history.length - 1) {
          history.push(saver);
          saver = '';
          break;
        }
      }
    }
  }

  if (history.length === 1) return true;
  return false;

}

console.log(matchWord('__END_DNE-----'));// -> true
console.log(matchWord('__ENDDNE__')); //  -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]')); //  -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); // -> true


module.exports = matchWord;
