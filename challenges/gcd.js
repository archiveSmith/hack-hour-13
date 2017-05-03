/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Invalid input';
  let curr = 1;
  let max;
  while (curr <= b) {
    if (a % curr === 0 && b % curr === 0) max = curr;
    curr += 1
  }
  return max;
}

module.exports = gcd;