/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 //BRUTE FORCE SOLUTION
function highestProduct(array) {
  if (array.length < 3 || array === null || array === undefined) return 0;
  combos = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i+1; j < array.length; j +=1) {
      for (let k = j+1; k < array.length; k +=1) {
        combos.push([array[i], array[j], array[k]]);
      }
    }
  }
  let highest = combos.reduce((acc, curr) => {
    let current = curr[0] * curr[1] * curr[2]
    if (current > acc) return current
    else return acc
  }, combos[0][0]*combos[0][1]*combos[0][2])
  return highest
}


//console.log(highestProduct([1,2, 27, 10]))

module.exports = highestProduct;
