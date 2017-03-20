// Some languages have "if" statements that are closed by
// "fi" instead of curly brackets. Or they close a "case" with
// "esac", i.e. the same keyword backwards. for this problem we'll check
 // that all words in a string are "closed". Write a function that takes a
 // string and returns true if every word is closed by its backwards counterpart.
 // Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function isSpecial(char) {
  var specChars = "~`!#$%^&*+=-[]\\\';@,/{}()|\":<>? _";
  for (var i = 0; i < specChars.length; i++) {
    if (char === specChars[i]) {
      return true;
    }
  }
  return false;
}

function splitWords(str) {
  var array = [];

  var word ='';
  for (var i = 0; i < str.length; i++) {
    if (!isSpecial(str[i])) {
      word += str[i];
    } else if (word !== '') {
      array.push(word.toLowerCase());
      word = '';
    }
  }

  if (word !== '') {
    array.push(word.toLowerCase());
    word = '';
  }

  return array;
}

function isReversed(str1, str2) {
  return str1 === str2.split("").reverse().join("");
}

function matchWord(str) {
  var words = splitWords(str);
  var stack = [];

  for (var i = 0; i < words.length; i++) {
    if (stack.length === 0) {
      stack.push(words[i]);
    } else {
      var head = stack[stack.length-1];
      if (isReversed(head, words[i])) {
        stack.pop();
      } else {
        stack.push(words[i]);
      }
    }
  }

  return stack.length === 0;
}

module.exports = matchWord;
