
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  
}


//====================TESTING=============================
console.log( highestProduct([3,4,5,1,9]) )
console.log( highestProduct([1,2,3]) )
console.log( highestProduct([9]) )
console.log( highestProduct([-9,3,4,9,-9]) )


//GETS YOU THE HIGHEST WITH 1 OR NO NEGATIVES
  // let sorted = array.sort((a,b) => b - a);
  // let firstThree = sorted.slice(0, 3);
  // return firstThree.reduce((acc, curr) => acc * curr, 1);  
//get highest of 2 smallest and 1 biggest
//compare those two and return the bigger value;   

/*
either take 0 negatives or 2 smallest and 1 biggest 
*/



module.exports = highestProduct;
