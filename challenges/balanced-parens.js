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
    let stripped = input.replace(/[^()[]{}]/g,'');
    let stack = [];
    let reference = {
        '{':'}',
        '[':']',
        '(':')'
    }

    if(stripped.length % 2 !== 0) return false;
    if(Object.keys(reference).indexOf(stripped[0]) === -1) return false;

    stack.push(input[0]);

    for(let i = 1; i<stripped.length; i +=1){

        let correctClose = reference[stack[stack.length-1]];

        if(stripped[i] ===  correctClose){
            stack.pop();
        }else if(Object.keys(reference).indexOf(stripped[i]) !== -1){
            stack.push(stripped[i]);
        }else{
            return false;
        }

    }
    return stack.length === 0 ? true : false;
}

module.exports = balancedParens;
