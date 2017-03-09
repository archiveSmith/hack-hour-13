/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 // didnt finish calculation with a fractional power

function pow(base, power) {
  if (typeof base !== 'number' || typeof power !== 'number') return undefined;
  let denominator= 0;

  // If the power is a fraction, convert to a fraction
  // var Fraction = require('fractional').Fraction;
  // if (!Number.isInteger(power)) {
  //   frac = new Fraction(power);
  //   power = frac.numerator;
  //   denominator = frac.denominator;
  // }

  // Calculates the nthRoot of a number

  // let result = base;
  if (power < 0) return pow(base, power + 1) / base;
  if (power === 0) return 1;
  return base * pow(base, power - 1);
  //
  // if (denominator !== 0) {
  //   result = nthroot(result, denominator);
  // }

  // return result;
}
// function nthroot(x, n) {
//   try {
//     var negate = n % 2 == 1 && x < 0;
//     if(negate)
//       x = -x;
//     var possible = pow(x, 1 / n);
//     n = pow(possible, n);
//     if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
//       return negate ? -possible : possible;
//   } catch(e){}
// }


// Works but not for floating power and non recursive, doesnt take negative
// let baseArr = [];
// for (let i = 0; i < power - 1; i += 1) {
//   baseArr.push(base);
// }
//
// return baseArr.reduce((acc, curr) => {
//   return acc * curr;
// }, base)

module.exports = pow;
