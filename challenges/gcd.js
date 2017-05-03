/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max; 
  let result;
  if(a > b) max = a; 
  else max = b; 
  if (a < 0) a *= -1;
  if (b < 0) b *= -1;
  for(let i = 0; i < Math.round(max/2); i ++){
    if(a % i === 0 && b % i === 0) result = i;
  }
  return console.log(result)
}

module.exports = gcd;

gcd(10, 8) //-> 2
gcd(9, 10) //-> 1
 