
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

function balancedParens2(input) {
  const brackets = {  '(': ')', '{': '}', '[': ']', ')': false, '}': false, ']': false  }
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === stack[stack.length - 1]) {
      stack.pop();
    } else if (input[i] in brackets) {
      let char = brackets[input[i]]
      if (char) {
        stack.push(char)
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}




//---------------------TESTING----------------------------------
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log('----------')
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log('----------')
console.log( balancedParens(' var wow  = { yo: thisIsAwesome() }') ); // true
console.log( balancedParens(' var hubble = function() { telescopes.awesome();') ); // false




module.exports = balancedParens;