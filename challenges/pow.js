/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if (power % 1 !== 0) throw new Error('Only integers accepted.');

	if (power === 0) return 1;
	// positive
	else if (power > 0) return base * pow(base, power - 1);
	// negative
	else return 1/base * pow(base, power + 1);
}

module.exports = pow;
