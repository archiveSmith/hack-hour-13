/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let min; 
  let result;
  if(a > b) min = b; 
  else min = a; 
  if (a < 0) a *= -1;
  if (b < 0) b *= -1;
  for(let i = 0; i <= min; i ++){
    if(a % i === 0 && b % i === 0) result = i;
  }
  return typeof result === 'number' ? result : 1; 
}

module.exports = gcd;

gcd(44, 8) //-> 4
gcd(9, 10) //-> 1
gcd(5,7) // ->1 
