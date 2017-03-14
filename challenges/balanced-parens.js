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
<<<<<<< HEAD
    let stack = [];
    let last;
    const closing = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    input = input.replace(/[^()\{\}\[\]]/gi, "");

    for (var i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
            stack.push(input[i]);
            console.log(stack);
        }
        else {
            last = stack.pop();
            console.log(closing[last]);
            if (input[i] !== closing[last]) {
                return false;
            }
        }
    }
    
    if (stack.length !== 0) {
      return false;
    }
    return true;
=======
>>>>>>> 982b5f4f0fadd6f168ccde4257e9a17882ddc00a

}

module.exports = balancedParens;
