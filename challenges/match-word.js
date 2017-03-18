// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". Write a function that 
// takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// 65 - 122

// map all of the words
// add forward values to the stack as objects with their counter parts and pop off the stack as you move forward


const createWordObj = (str) => {
  const match = {}
  let beginWord = 0;
  let endWord = 0;
  for (let i = 0; i < str.length+1; i += 1) {
    if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122) && !(str.charCodeAt(i) >= 91 && str.charCodeAt(i) <= 96)) {
      if (beginWord === endWord) {
        beginWord = i;
        endWord = i+1;
      } else {
        endWord = i;
      }
    } else {
      if (endWord > beginWord) {
        match[str.substring(beginWord, endWord+1).toLowerCase()] = str.substring(beginWord, endWord+1).split('').reverse().join('').toLowerCase();
        beginWord = endWord = 0;
      }
    }
  }
  return match;
}

function matchWord(str) {
  let match = createWordObj(str);
  let words = Object.keys(match);
  let lookUp = () => {
    const key = {};
    for (let i = 0; i < words.length; i +=1) {
      if (!key[words[i].split('').reverse().join('')]) {
        key[words[i]] = match[words[i]];
      }
    }
    return key;
  }
  let key = lookUp();
  let stack = [];
  for (let i = 0; i < words.length; i += 1) {     
    console.log(stack[stack.length-1], words[i], key[words[i]])                                                    ///hello my friend
    if (key[stack[stack.length-1]] === words[i]) {
      stack.pop();
    } else {
      stack.push(words[i]);
    }
  }
  if (stack.length === 0) return true;
  return false;
}


module.exports = matchWord;


