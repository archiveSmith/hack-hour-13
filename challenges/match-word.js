// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const words = [];
  for (let i = 0; i < str.length; i += 1) {
    let word = '';

    while (i < str.length - 1 && str[i].toLowerCase() === str[i].toUpperCase()) {
      i += 1;
    };

    while (str[i].toLowerCase() !== str[i].toUpperCase()) {
      word += str[i].toLowerCase();
      if (i === str.length - 1) break;
      else i += 1;
    }

    if (words[words.length - 1] === word) words.pop();
    else if (words.includes(word)) return false;
    else if (word) {
      let reversedWord = word.split('').reverse().join('');
      words.push(reversedWord);
    }
  }
  return words.length === 0;
}

module.exports = matchWord;
