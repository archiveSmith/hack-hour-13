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
	let counterP = 0;
	let counterB = 0;
	let counterC = 0;
	for (let i = 0; i < input.length; i += 1) {
		let c = input.charAt(i);
		switch (c) {
			case '\(':
				counterP += 1;
				break;
			case '\[':
				counterB += 1;
				break;
			case '\{':
				counterC += 1;
				break;
			case '\)':
				counterP -= 1;
				break;
			case '\]':
				counterB -= 1;
				break;
			case '\}':
				counterC -= 1;
				break;
		}
	}
	if (counterP === 0 && counterB === 0 & counterC === 0) {
		return true;
	}
	else {
		return false;
	}
}

module.exports = balancedParens;
