// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const words = str.split(/[^a-zA-Z]/ig).filter((elm) => elm !== '').map((elem) => elem.toLowerCase());
  console.log(words);
  const stack = [];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      let char = words[i].split('').reverse().join('');
      stack.push(char);
    }
  }
  return stack.length === 0;
}

module.exports = matchWord;
