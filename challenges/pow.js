/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, powerInputAsZero=true) {
  if(powerInputAsZero && power === 0) return 1;
  if(power === 0) return base;
  if (power === 1) return base;
  if(power > 0) return base * pow(base, power - 1, false);
  if(power < 0) return 1 / pow(base, power + 1, false);
}

console.log(pow(4,-1));
console.log(pow(4,0));

module.exports = pow;
