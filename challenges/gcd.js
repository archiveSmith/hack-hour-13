/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let divisor = Math.min(a, b);
  let divident = Math.max(a, b);
  let remainder = divident - (divisor * Math.floor((divident/divisor)));
  while(remainder) {
    divident = divisor;
    divisor = remainder;
    remainder = divident - (divisor * Math.floor((divident/divisor)));
  }
  return divisor;
}

module.exports = gcd;
