/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	if (!binary || /[^01]/.test(binary)) throw new Error('Invalid binary string');

	var binDigitMultiplier = 1;
	var result = 0;

	for (var i = binary.length - 1; i >= 0; i -= 1) {
		result += binary[i] * binDigitMultiplier;
		binDigitMultiplier *= 2;
	}
	
	return result;
}

// var my = require('./myLibrary');
// my.testCase(binToDec('0'), 0);
// my.testCase(binToDec('11'), 3);
// my.testCase(binToDec('100'), 4);
// my.testCase(binToDec('101'), 5);
// my.testCase(binToDec('0101'), 5);

module.exports = binToDec;
