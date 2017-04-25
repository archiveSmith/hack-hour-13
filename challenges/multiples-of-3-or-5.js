'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(sum = 0, currNum = 1) {
  if (currNum % 3 === 0 || currNum % 5 === 0) sum += currNum;
  return currNum >= 9 ? sum : sumMultiples3Or5Below1000(sum, currNum + 1);
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z, sum = 0, currNum = 1) {
  if (currNum % x === 0 || currNum % y === 0) sum += currNum;
  return currNum >= z - 1 ? sum : sumMultiplesXOrYBelowZ(x, y, z, sum, currNum + 1);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
