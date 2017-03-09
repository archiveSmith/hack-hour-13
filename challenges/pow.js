/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power = 0) {
    if (isNaN(base) || isNaN(power)) return 'Input error!';
    if (arguments.length === 1) return base;
    if (power === 0) return 1;
    if (power === 1) return base;
    if (power > 1) return base * pow(base, power - 1);
    if (power < 0) return 1/(base * pow(base, -1 * power - 1));
}

module.exports = pow;
