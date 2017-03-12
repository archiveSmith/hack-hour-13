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
		let curr = input.charAt(i);

		const parse = function(c) {
			let str = '';
			for (let index = i + 1; index < input.length; index += 1) {
			  if (input.charAt(index) !== c) {
				  str += input.charAt(index);
			  } else {
			    break;
			  }
			}
			return str;
		}
	
		switch (curr) {
			case '(':
				counterP += 1;
				if (!balancedParens(parse(')'))) return false;
				break;
			case '[':
				counterB += 1;
				if (!balancedParens(parse(']'))) return false;
				break;
			case '{':
				counterC += 1;
				if (!balancedParens(parse('}'))) return false;
				break;
			case ')':
				counterP -= 1;
				break;
			case ']':
				counterB -= 1;
				break;
			case '}':
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
