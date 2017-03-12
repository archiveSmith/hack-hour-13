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
  if (typeof input !== 'string' || input === undefined) {
    return "Please enter a string!";
  }
  //creates string of brackets, each set balanced. 
  //This will be used to check against for what next bracket should be.
  let parens = "[]{}()", openBrackIndexPos = [], brackPosition;

  for(let i = 0; input[i]; i++) {
  	//knowing this index determines if it's a bracket AND if it's an opening bracket or not
    brackPosition = parens.indexOf(input[i]);
    
    //skips over characters that are not brackets
    if (brackPosition === -1) {
      continue;
    }
    //If parens is opening parens (according to declared parens variable)
    if (brackPosition % 2 === 0) {
    //then push its index to array. + 1 is index in parens of next expected bracket.
      openBrackIndexPos.push(brackPosition + 1); 
      //
    } else if (openBrackIndexPos.pop() !== brackPosition) 
        return false;
  }
 
  return openBrackIndexPos.length === 0;

}

module.exports = balancedParens;
