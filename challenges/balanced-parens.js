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
  let index = 0;
  let char = '';

  let pcount = 0;
  let bcount = 0;
  let ccount = 0;

  while (index < input.length) {
    char = input.charAt(index);
    if (char === '(') pcount += 1;
    if (char === '[') bcount += 1;
    if (char === '{') ccount += 1;
    if (char === ')' && pcount === 0) return false;
    else if (char === ')' && pcount !== 0) pcount -= 1;
    if (char === ']' && bcount === 0) return false;
    else if (char === ']' && bcount !== 0) bcount -= 1;
    if (char === '}' && ccount === 0) return false;
    else if (char === '}' && ccount !== 0) ccount -= 1;
    index += 1;
  }
  if (pcount === 0 && bcount === 0 && ccount === 0 ) return true;
  else return false;
}

module.exports = balancedParens;
