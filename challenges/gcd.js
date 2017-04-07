/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
 // input two integers
 // output should return the GCD of inputs
 // edge cases
  // if inputs are not integers return invalid input

function gcd(a, b) {
  let arrA = [];
  let arrB = [];
  let great;
  let gcdArr;

  if (typeof a !== 'number' || typeof b !== 'number') return "invalid input";
  if (a === b) return a;

  for (let i = 1; i < a; i += 1) {
    if (a % i === 0) arrA.push(i);
  }

  for (let j = 1; j < b; j += 1) {
    if (b % j === 0) arrB.push(j);
  }
  gcdArr = [...arrA, ...arrB].sort((a, b) => {
    return a < b;
  });

  for (let g = 0; g < gcdArr.length; g += 1) {
    if (gcdArr[g] === gcdArr[g + 1]) {
      great = gcdArr[g];
      break;
    }
  }
  return great;
}

module.exports = gcd;
