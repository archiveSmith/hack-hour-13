/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
'use strict';

// brute force
function findGcd(a, b) {
  if (isNaN(a) || isNaN(b) || a % 1 || b % 1) return null;

  // returning one of the integers if happen to be the same
  // or if each is only 1
  if (a === b || a === 1) return a;
  else if (b === 1) return b;

  // get lower and higher of nums
  let lower = Math.min(a, b);
  let higher = Math.max(a, b);
  /* iterate from 2 to lower num */
  // lower copy to break down into factors
  let lowerCopy = lower;
  // factors of lower
  const lowerFactors = [];

  // gcd to multiply by common factors
  let gcd = 1;

  // collect lower num's factors
  let n = 2;
  while (lowerCopy > 1) {
    // n is a factor of lowerCopy
    if (lowerCopy/n % 1 === 0) {
      // decompose lowerCopy
      lowerCopy /= n;
      // collect factors
      lowerFactors.push(n);
    } else {
      // move on to next num
      n += 1;
    }
  }

  // go thru b's factors and end at greatest factor of lower num
  let higherCopy = higher;
  lowerFactors.forEach(factor => {
    if (higherCopy / factor % 1 === 0) {
      // decompose bCopy
      higherCopy /= factor;
      // multiply gcd
      gcd *= factor;
    }
  })  

  return gcd;
}

function findGcd2(a, b) {
  if (isNaN(a) || isNaN(b) || a % 1 || b % 1) return null;
  if (!b) return a;
  return findGcd2(b, a % b);
}

var res = findGcd2(28, 30);
console.log(res);

module.exports = findGcd2;