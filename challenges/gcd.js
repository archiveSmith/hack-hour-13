/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let aDivisors = [], bDivisors = [];

  for (let i = 1; i <= a; i += 1) {
      if (a % i === 0) aDivisors.push(i);
  }
    
   for (let i = 1; i <= b; i += 1) {
      if (b % i === 0) bDivisors.push(i);
  }

  let commonDivisors = aDivisors.filter((element, index) => bDivisors.indexOf(element) !== -1);

  if (commonDivisors.length === 0) return 1;
  
  return commonDivisors[commonDivisors.length-1];
}

module.exports = gcd;