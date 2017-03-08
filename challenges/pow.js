/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if(!power) return 1;
  if(power === 1) return power;

  return base * pow(base, power-1);
}

module.exports = pow;
