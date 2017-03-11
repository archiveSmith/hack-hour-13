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
    let openers = ['[','(','{']
    //base cases
    if(stripped.length % 2 != 0) return false;
    if(stripped.length === 0) return true;

    function checkParens(input){
        if(input.length %2 != 0) return false
        if(input.length === 2) return true;
    }
}







function balancedParens(input){
    let stripped = input.replace(/[^()[]{}]/g,'');
    let openers = ['[','(','{']
    let closers =  [']',')','}']
    let open = 0;
    let close = 0;

    if(openers.indexOf(stripped[0]) === -1) return false;
    if(stripped.length % 2 != 0) return false;

    for(let i = 0; i<stripped.length; i+=1){
        if (openers.indexOf(stripped[i]) >= 0) open += 1;
        if (closers.indexOf(stripped[i]) >= 0) close += 1;
    }
    return open === close;
}

console.log(balancedParens('(()){}'))
// module.exports = balancedParens;
