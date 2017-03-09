/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    return power >= 0 ? 
    (power === 0 ? 1 : base * pow(base, power - 1)) : 1 / (power === 0 ? 1 : base / pow(base, power + 1));
}

module.exports = pow;