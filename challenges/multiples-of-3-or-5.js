'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

const sumMultiples3Or5Below1000 = () => sumMultiplesXOrYBelowZ(3,5,1000);

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const args = Array.prototype.slice.call(arguments);
  if (
    // non-numbers, nonpositive numbers, or non-integers not allowed
    args.some(arg => isNaN(arg) || arg <= 0 || arg % 1)
  ) {
    throw Error('Invalid argument(s)');
  }

  let sum = 0;

  // iterate up to z
  for (let num = 1; num < z; num += 1) {
    // if num is either a multiple of x or y
    if (!(num % x) || !(num % y)) {
      sum += num;
    } 
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
