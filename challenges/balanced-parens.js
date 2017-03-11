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
  let array = input.split('');
  let brackets = [];
  let result = true;
  array.forEach((char) => {
    if (char === '(') brackets.push(char);
    if (char === ')') {
      if (brackets[brackets.length - 1] !== '(') return result = false;
      brackets.pop();
    }
    if (char === '[') brackets.push(char);
    if (char === ']') {
      if (brackets[brackets.length - 1] !== '[') return result = false;
      brackets.pop();
    }
    if (char === '{') brackets.push(char);
    if (char === '}') {
      if (brackets[brackets.length - 1] !== '{') return result = false;
      brackets.pop();
    }
  })
  if (brackets.length > 0) return result = false;
  return result;
}

module.exports = balancedParens;
