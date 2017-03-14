/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	if (isNaN(n) || n <= 0) throw new Error('Only accepts positive integers');

	const numerals = {
		1    : 'I',
		4    : 'IV',
		5    : 'V',
		9    : 'IX',
		10   : 'X',
		40   : 'XL',
		50   : 'L',
		90   : 'XC',
		100  : 'C',
		400  : 'CD',
		500  : 'D',
		900  : 'CM',
		1000 : 'M'
	}
	
	let numeralBuilder = '';
	const values = Object.keys(numerals); // array of values from 1-1000
	while (n) {
		const value = values.pop(); // start from end (1000)
		const numeralAmt = Math.floor(n / value);
		if (numeralAmt) numeralBuilder += numerals[value].repeat(numeralAmt)

		n = n % value;
	}
	return numeralBuilder;
}

// const my = require('./myLibrary');
// my.testCase(romanNumeral(1), 'I');
// my.testCase(romanNumeral(4), 'IV');
// my.testCase(romanNumeral(14), 'XIV');
// my.testCase(romanNumeral(53), 'LIII');
// my.testCase(romanNumeral(2541), 'MMDXLI');
// my.testCase(romanNumeral({}), 'Error');
// my.testCase(romanNumeral(0), 'Error');

module.exports = romanNumeral;
