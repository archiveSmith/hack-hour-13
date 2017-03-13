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
    let openParens = ['[','(','{'];
    let closedParens = [']',')','}'];
    let testArr = [];
    for (let i = 0; i < input.length; i++){
        if (openParens.indexOf(input[i]) !== -1) {
            testArr.push(input[i])
        }else if(closedParens.indexOf(input[i]) !== -1){
            if (openParens[closedParens.indexOf(input[i])] === testArr[testArr.length -1]){
                testArr.pop();
            }else{
                return false;
            }
        }
    }
    if(testArr.length > 0 )return false;
    return true;
}

//


console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))

module.exports = balancedParens;
