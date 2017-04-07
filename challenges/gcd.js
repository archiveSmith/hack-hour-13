/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let c = a % b;
  while (c) {
    a = b;
    b = c;
    c = a % b;
  }
  return b;
}


module.exports = gcd;


