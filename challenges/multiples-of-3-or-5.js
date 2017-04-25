'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  for (let i = 1; i <= 1000; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {

  if (!(Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z) 
  && x <= 1000 && x >= 0 && y <= 1000 && y >= 0 && z <= 1000 && z >= 0)) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i <= 1000; i += 1) {
    if (i % x === 0 || i % y === 0 || i % z === 0) {
      sum += i;
    }
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
