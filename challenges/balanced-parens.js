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

 function balancedParens(input) {
  // with regexp, test if the input even has any parenthetical notation
  if (!/\(|\)|\[|\]|\{|\}/.test(input)) return false;

  // test as to whether a set of parentheses are balancedParens
  const indOfLeftPar = input.indexOf('(');
  const indOfRightPar = input.indexOf(')');

  const indOfLeftSq = input.indexOf('[');
  const indOfRightSq = input.indexOf(']');

  const indOfLeftCurl = input.indexOf('{');
  const indOfRightCurl = input.indexOf('}');

  if (/[\(\)]/g.test(input) && /[\[\]]/g.test(input) && /[\{\}]/g.test(input)) {
    return (indOfLeftPar < indOfRightPar && indOfLeftSq < indOfRightSq
    && indOfLeftCurl < indOfRightCurl);
  }

  if (/[\(\)]/g.test(input) && /[\[\]]/g.test(input)) {
    return indOfLeftPar < indOfRightPar && indOfLeftSq < indOfRightSq;
  }

  if (/[\[\]]/g.test(input) && /[\{\}]/g.test(input)) {
    return indOfLeftSq < indOfRightSq && indOfLeftCurl < indOfRightCurl;
  }

  if (/[\(\)]/g.test(input) && /[\{\}]/g.test(input)) {
    return indOfLeftPar < indOfRightPar && indOfLeftCurl < indOfRightCurl;
  }

  if (indOfLeftPar < indOfRightPar
    || indOfLeftSq < indOfRightSq
  || indOfLeftCurl < indOfRightCurl) return true;

  return false;
}

module.exports = balancedParens;
