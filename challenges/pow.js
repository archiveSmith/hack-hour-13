/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (!Number(base) || !Number(power)) return 'I need an integer';
  if (power > 0) {
    if (power === 1) return base;
    return pow(base, power - 1) * base;
  } power *= -1;
  if (power === 1) return base;
  return 1 / (pow(base, power - 1) * base);
}

console.log(pow(5,-3)); // logs 0.008
console.log(pow(5,5)); // logs 3125
console.log(pow("puppies",3)); // logs 'I need an integer'
console.log(pow(3,"kitties")); // logs 'I need an integer'
module.exports = pow;
