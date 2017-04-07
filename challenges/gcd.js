/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let maxDivisor = 1;
  // iterate through a, and determine which is the highest number between a and b
  // that will return 0 for mod n
  for (let i = 0; i < a; i += 1) {
    if (a % i === 0 && b % i === 0) maxDivisor = i;
  }
  return maxDivisor;
}

module.exports = gcd;
