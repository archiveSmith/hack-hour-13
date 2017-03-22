/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //return array.sort((a,b) =>  b - a).slice(0,3).reduce((accum, curr) => accum*curr)
  let vessel = [];
  
  vessel = array.sort((a,b) => a-b);
  console.log(vessel)
  //console.log(array.sort((a,b) => b-a))
  
  //edge case where all nums are negative
  if (array.every(element => element < 0)) {
    return array.sort((a,b) => b-a).slice(0,3).reduce((accum,curr) => accum * curr);
  }
  
  //result will have to be the biggest 2 from pos or neg
  let remaining = 0;
  let highest = vessel[array.length-1];
  if (Math.abs(vessel[0] * vessel[1]) > vessel[array.length-2] * vessel[array.length-3]) {
    remaining = vessel[0] * vessel[1];
  } else {
    remaining = vessel[array.length-2] * vessel[array.length-3];
  }

  return highest * remaining;
}


module.exports = highestProduct;
