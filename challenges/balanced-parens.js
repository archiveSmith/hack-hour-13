/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  // reduce to nothing but brackets array
  let arr = input.match(/[\[{()}\]]/ig);
  // if array length is not even, brackets cannot match, return false
  if (arr.length % 2 !== 0) return false;

  // remove any immediate matching brackets
  while (arr.length > 0) {
    let i = 0;
    if (arr[i] === '(' && arr[i+1] === ')') arr = arr.slice(0, i).concat(arr.slice(i+2));
    else if (arr[i] === '[' && arr[i+1] === ']') arr = arr.slice(0, i).concat(arr.slice(i+2));
    else if (arr[i] === '{' && arr[i+1] === '}') arr = arr.slice(0, i).concat(arr.slice(i+2));
    else break;
  }
  // if at this point, array length is 2, return false
  if (arr.length === 2) return false;

  // if array length is bigger than 2, check if array matches on both sides
  if (arr.length > 2) {
    for (let i = 0; i < arr.length / 2; i += 1) {
      if (arr[i] === '(' && arr[arr.length - 1 - i] !== ')') return false;
      else if (arr[i] === '[' && arr[arr.length - 1 - i] !== ']') return false;
      else if (arr[i] === '{' && arr[arr.length - 1 - i] !== '}') return false;
    }
  }

  // if array length is bigger than two, matches on both sides, return true
  // if array length after while loop is 0, return true
  return true;
}

module.exports = balancedParens;
