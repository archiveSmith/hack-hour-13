'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let cap = 1000;
  let check =[];
  for(let number=1; number<cap; number += 1){
  	if(number % 3 ===0 || number % 5 ===0){
  		sum += number;
  	}
  }
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for(let number=1; number<z; number +=1){
  	if(number % x ===0 || number % y ===0){
  		sum += number;
  	}
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
