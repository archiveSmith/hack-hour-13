/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (typeof base !== 'number') return 'NOT A NUMBER';
  if (power < 0) return 1 / (base * pow(base, power * (-1) - 1))
  if (power === 0) return 1;
  if (power === 1) return base;
  if (power === 2) return base * base;
  return base * pow(base, power - 1);
}
module.exports = pow;
