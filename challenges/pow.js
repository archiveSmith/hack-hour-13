/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// Input
  // Two parameters
  // Base & Power (x, y)

// Output
  // Calculated value of base^power (number)

// Edge Cases
  // make sure both base and power are valid inputs
    // check if base is a finite
    // check if power is a number/integer
    // not dealing with negative exponents so check if power is less than 0
    // check for base === 0 and power === 0 (0^0);

// To solve recursively, answer these questions:

// What is our base case?
  // When power decrements to 0.

// Which parameters do we carry?
  // Base and power.

// How do we move toward base case?
  // Decrement power.

// What should we return?
  // A product that multiplies the base by itself power times,
  // where power represents the number of recursive calls.



function pow(base, power) {
  if (!isFinite(base) || !Number.isInteger(power) || power < 0 || (base === 0 && power === 0)) {
    return 'Please enter valid inputs';
  }

  function powerify(base, power) {
    if (power === 0) return 1;
    return base * powerify(base, power - 1);
  }

  return powerify(base, power);
}

// console.log(pow(5, 3));

module.exports = pow;
