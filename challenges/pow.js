/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

var Fraction = require('fractional').Fraction;
var test = new Fraction(.5);

console.log(test);

// takes integer root and positive base;
function nthRoot(base, n){
  let guess = 5;
  function newGuess(){
    guess = (1/n)*((n-1)*guess + (base/pow(guess,n-1)))
    return guess;
  }
  for (let i = 0; i < 100; i += 1) {
    newGuess();
  }
  return guess;
}



function pow(base, power) {
  if (power === 0) return 1;
  if (power < 0) return 1 / pow(base, -power);
  if (!Number.isInteger(power)) {
    const fraction = new Fraction(power);
    return nthRoot(pow(base, fraction.numerator), fraction.denominator);
  }
  return base * pow(base, power - 1);

}

console.log(pow(2,.5));

module.exports = pow;
