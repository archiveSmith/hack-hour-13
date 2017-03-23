// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

<<<<<<< HEAD

function matchWord(str) {
 

  if (typeof str !== 'string') return 'Please give me a valid string';
  if (str === '') return true;

  // Make alphabetic characters lowercase to be case insensitive
  const lowerCaseStr = str.toLowerCase();

  // Collect words
  const words = lowerCaseStr.match(/[a-z]+/g);
  if (words.length % 2 === 1) return false;

  // Create array to build up unmatched words
  const stack = [];

  // Loop through all words
  words.forEach(word => {
    const reversedWord = word.split('').reverse().join('');
    const topOfStack = stack[stack.length - 1];

    // If current word reversed does NOT match last word pushed into stack, push current word.
    if (reversedWord !== topOfStack) stack.push(word);

    // Else if they do match, pop off the word stack to show that pair has matched!
    else stack.pop();
  });

  // If wordStack is empty, all matches were found! Otherwise, all words were not matched.
  return !wordStack.length;
=======
function matchWord(str) {

>>>>>>> b95a68f37cd4a57e4722ac9f4605e2b3aebcf3d4
}

module.exports = matchWord;
