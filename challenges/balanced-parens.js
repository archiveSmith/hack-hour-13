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

	if (typeof input !== 'string' || !input) return false;

	var bracketQ = [];
	var matchingBracket = {
		'[': ']',
		'(': ')',
		'{': '}'
	};
	var closingBrackets = [']', '}', ')'];

	for (var i = 0; i < input.length; i += 1) {
		var c = input[i];

		if (closingBrackets.indexOf(c) >= 0) {
			// if encounter closing bracket that is the first or doesn't match top of stack
			if (bracketQ && c !== matchingBracket[ bracketQ[bracketQ.length-1] ]) {
				return false;
			}
			bracketQ.pop();
		}
		// if c has a matching bracket i.e. is a bracket
		else if (matchingBracket[c]) {
			bracketQ.push(c);
		// if c matches first bracket on queue
		} 
	}

	// if still any on stack
	return !bracketQ.length;

}

var res = balancedParens('fsdfd{}')
console.log(res); // true

module.exports = balancedParens;
