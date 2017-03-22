<<<<<<< HEAD
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.
=======
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.
>>>>>>> a468ace62fbe94d866e5d745c3152735883fb69e

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
<<<<<<< HEAD
  str = str.toLowerCase();
	const word = str.match(/[a-z]+/)[0];
	const endWord = word.split('').reverse().join('');
  if (str.indexOf(endWord) < str.indexOf(word) + word.length) return false;
 	const reverseStr = str.split('').reverse().join('');
 	if (reverseStr.indexOf(word) != reverseStr.indexOf(reverseStr.match(/[a-z]/))) return false;
 	return true;
=======

>>>>>>> a468ace62fbe94d866e5d745c3152735883fb69e
}

module.exports = matchWord;
