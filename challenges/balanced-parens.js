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
    // map all into an array of objects ([{ type : bracket, style : open }])
    // iterate through and make sure {   (  (  ){ }  )    } 
    // check that first open has a close after it of the same style with nothing inbetween with nothing inbetween then remove from array
    // continue until done - if anything remaining or logic above returns false, then return false
    let arr = []
    let openMax;
    for (let i = 0; i < input.length; i += 1) {
        if (input[i] === '{') arr.push({'type': 'block', 'dir': 'open'})
        if (input[i] === '}') arr.push({'type': 'block', 'dir': 'closed'})
        if (input[i] === '(') arr.push({'type': 'paren', 'dir': 'open'})
        if (input[i] === ')') arr.push({'type': 'paren', 'dir': 'closed'})
        if (input[i] === '[') arr.push({'type': 'array', 'dir': 'open'})
        if (input[i] === ']') arr.push({'type': 'array', 'dir': 'closed'})
    }

    function findMaxOpen(array) {
        let max;
        array.forEach(function(value, index) {
            if (value.dir === 'open') max = index;
        })
        return max;
    }
    while (arr.length > 0) {
        openMax = findMaxOpen(arr)
        if (arr[openMax+1] === undefined ) return false;
        if (arr[openMax].type === arr[openMax+1].type && arr[openMax+1].dir === 'closed') {
           arr.splice(openMax, 2)
        }
        else return false;
    }
    return true
}



module.exports = balancedParens;
