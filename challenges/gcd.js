/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (isNaN(a) || isNaN(b)) return 'not a number';
  let result = 1;
  for (let i = Math.min(a, b, 0); i <= Math.max(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return result;
}

module.exports = gcd;