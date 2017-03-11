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
    if (typeof input !== "string") {
        console.log("Input is not a string.")
        return false;
    }
    const openers = ['(', '[', '{']
    const closers = [')', ']', '}']

    function inParens(str) {
        for (let i = 1; i < str.length; i += 1) {
            let char = str.charAt(i);
            if (openers.indexOf(char) !== -1) {
                if (char === openers[0]) {
                    let check = inParens(str.substring(i));
                    if (check) i += check;
                    else return false;

                } else if (char === openers[1]) {
                    let check = inBrackets(str.substring(i))
                    if (check) i += check;
                    else return false;
                } else if (char === openers[2]) {
                    let check = inBraces(str.substring(i))
                    if (check) i += check;
                    else return false;
                }
            } else if (closers.indexOf(char) !== -1) {
                if (char === closers[0]) return i;
                else if (char === closers[1]) return false;
                else if (char === closers[2]) return false;
            }             
        }
    }

    function inBrackets(str) {
        for (let i = 1; i < str.length; i += 1) {
            let char = str.charAt(i);
            if (openers.indexOf(char) !== -1) {
                if (char === openers[0]) {
                    let check = inParens(str.substring(i));
                    if (check) i += check;
                    else return false;

                } else if (char === openers[1]) {
                    let check = inBrackets(str.substring(i))
                    if (check) i += check;
                    else return false;
                } else if (char === openers[2]) {
                    let check = inBraces(str.substring(i))
                    if (check) i += check;
                    else return false;
                }
            } else if (closers.indexOf(char) !== -1) {
                if (char === closers[0]) return false;
                else if (char === closers[1]) return i;
                else if (char === closers[2]) return false;
            }             
        }
    }

    function inBraces(str){
        for (let i = 1; i < str.length; i += 1) {
            let char = str.charAt(i);
            if (openers.indexOf(char) !== -1) {
                if (char === openers[0]) {
                    let check = inParens(str.substring(i));
                    if (check) i += check;
                    else return false;

                } else if (char === openers[1]) {
                    let check = inBrackets(str.substring(i))
                    if (check) i += check;
                    else return false;
                } else if (char === openers[2]) {
                    let check = inBraces(str.substring(i))
                    if (check) i += check;
                    else return false;
                }
            } else if (closers.indexOf(char) !== -1) {
                if (char === closers[0]) return false;
                else if (char === closers[1]) return false;
                else if (char === closers[2]) return i;
            }             
        }        
    }


    for (let i = 0; i < input.length; i += 1) {
        let char = input.charAt(i);
        if (openers.indexOf(char) !== -1) {
            if (char === openers[0]) {
                let check = inParens(input.substring(i));
                if (check) i += check;
                else return false;
            } else if (char === openers[1]) {
                let check = inBrackets(input.substring(i))
                if (check) i += check;
                else return false;
            } else if (char === openers[2]) {
                let check = inBraces(input.substring(i))
                if (check) i += check;
                else return false;
            }
        }      
    }
    return true;
}

module.exports = balancedParens;