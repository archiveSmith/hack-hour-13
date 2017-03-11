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

 function balancedParens2(input){
   let open = 0;
   let closed = 0;
   for (i = 0; i < input.length; i++) {
     if (input[i] === '(') open += 1;
     else if (input[i] === ')') closed += 1;
     if (closed > open) return false;
   }
   return open === closed;
 }


 function balancedParens(input){
   const parensStack = [];
   let popResult = true;
   function stackPop(char){
     if (parensStack[parensStack.length - 1] === char) {
       return parensStack.pop();
     } else return '';
   }
   for (let i = 0; i < input.length; i += 1) {
     if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
       parensStack.push(input[i]);
     } else if (input[i] === ')') popResult = stackPop('(');
     else if (input[i] === ']') popResult = stackPop('[');
     else if (input[i] === '}') popResult = stackPop('{');
     if (!popResult) return false;
   }
   return parensStack.length === 0;
 }

module.exports = balancedParens;
