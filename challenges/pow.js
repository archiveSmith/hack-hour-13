/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power >= 0) {
    if (power === 0) {return 1}
    if (power === 1) {return base}
    return base * pow(base, power - 1)
  } else {
    power = Math.abs(power);
    if (power === 0) {return 1}
    if (power === 1) {return base}
    return 1 / (base * pow(base, power - 1));
  }
}

function tester(base, power) {
  console.log('my way', pow(base,power))
  console.log('standard', Math.pow(base,power))
}

tester(13, 2);


module.exports = pow;

