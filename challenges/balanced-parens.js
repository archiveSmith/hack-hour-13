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

function balancedParens(str){
	let openOpp  = {
		"{":"}",
		"[":"]",
		"(":")"
	};
	let closed = {
		"}":true,
		")":true,
		"]":true
	};
	var stack =[];
	var cr, last;
	for(let index=0; index < str.length; index++){
		cr = str[index];
		if(cr in openOpp){
			stack.push(cr);
		}
		else{
			if(cr in closed){
				last = stack.pop();
				if(openOpp[last] !== cr) return false;
			}
		}
	}
	return stack.length === 0;
}

module.exports = balancedParens;
