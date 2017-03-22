/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //return array.sort((a,b) =>  b - a).slice(0,3).reduce((accum, curr) => accum*curr)
  let vessel = [];
  
  vessel[0] = array.filter(element => element > 0).sort((a,b) => b-a);
  vessel[1] = array.filter(element => element < 0).sort((a,b) => a-b);
  
  console.log(vessel)
  
  //edge case where all nums are negative
  if (array.every(element => element < 0)) {
    return array.sort((a,b) => b-a).slice(0,3).reduce((accum,curr) => accum * curr);
  }
  
  //result will have to be the biggest 2 from pos or neg
  let remaining = 0;
  let highest = vessel[0][0];
  if (Math.abs(vessel[1][0] * vessel[1][1]) > vessel[0][1] * vessel[0][2]) {
    remaining = vessel[1][0] * vessel[1][1];
  } else {
    remaining = vessel[0][1] * vessel[0][2];
  }

  return highest * remaining;
}


module.exports = highestProduct;
