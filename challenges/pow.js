/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if (power >= 0) {
		if (power === 0) return 1;
		return base * pow(base - 1);
	} else if (power < 0) {
		if (power === 0) return 1;
		return (1 / (pow(base, -power)));
	}

}

module.exports = pow;
