
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
  let cleared = input.replace(/[^\(\)\{\}\[\]]/g, '')
  let parens = {'(': ')', '[': ']', '{':'}'}
  let stack = [];
  for (let i = 0; i < cleared.length; i += 1) {
    if (parens[cleared[i]] !== stack[stack.length -1] || stack.length === 0) {
      stack.push(parens[cleared[i]]);
    } else {
      stack.pop();
    }
  }
  return stack;
  return stack.length === 0;
}


//---------------------TESTING----------------------------------
//console.log(balancedParens('testing(hi}]['));  
//console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log('----------')
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false