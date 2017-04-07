/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'please enter numbers only'
  if (a === b) return a;
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  if (max % min === 0) return min;  
  let divisor = Math.floor(min/2)
  while (max % divisor !== 0 || min % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
}

module.exports = gcd;