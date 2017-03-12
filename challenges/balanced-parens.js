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

 function balancedParens (str) {
   let open = ['(', '[', '{'];
   let closed = [')', ']', '}'];
   let checkArr = [];

   for(let i = 0; i < str.length; i += 1) {
     //filter out non-parens, non-brackets, and non-curly
     if (open.indexOf(str[i]) !== -1) {
       checkArr.push(str[i]);
     } else if(closed.indexOf(str[i]) !== -1) {
       //if we run into curly, bracket or parens, check that to see if that item matches the last item in checkArr. if not return false
       if (open[closed.indexOf(str[i])] === checkArr[checkArr.length-1]) {
         checkArr.pop();
       } else {
         return false;
       }
     }
   }
   //if there was a paren/curly/bracket left unchecked by the end, we know it is not balanced
   if (checkArr.length !== 0) return false;
   return true;
 }

module.exports = balancedParens;
