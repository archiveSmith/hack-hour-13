/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sorted = array.sort((a,b) => b - a);
  let firstThree = sorted.slice(0, 3);
  return firstThree.reduce((acc, curr) => acc * curr, 1);  
}


//====================TESTING=============================
console.log( highestProduct([3,4,5,1,9]) )
console.log( highestProduct([1,2,3]) )
console.log( highestProduct([9]) )
console.log( highestProduct([-9,3,4,9,-2]) )

/*
sort array
calculate product of 3 highest
*/



module.exports = highestProduct;
