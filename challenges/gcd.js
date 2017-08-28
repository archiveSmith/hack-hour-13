/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
return b? gcd(b, a % b): a;
}

function greatestCommonDivisor(a, b) {
  if(a === 0) return b;
  if(b === 0) return a;

  let min = Math.min(a, b);
  for(let i=min; i>0; i--) {
    if(a%i ===0 && b%i === 0) return i;
  }
}
const bigG = (a, b) => b === 0 ? a: bigG(b, a%b);

console.log('using the short gcd ', gcd(252, 105));
console.log('using brute force, ', bigG(252, 105));

module.exports = gcd;