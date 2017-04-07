/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  if (isNaN(a+b)) return 'invalid inputs. please provide two numbers';

  if (Math.max(a, b) === b) b = [a, a = b][0];

  let divisor = b;
  while (divisor > 1) {
    if (a % divisor === 0 && b % divisor =q== 0) return divisor;
    divisor--;
  }
  return b;

}

module.exports = gcd;