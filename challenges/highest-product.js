/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // if array.length is less than 3, return 0
  if (array.length < 3) return 0;
  // if array.length is 3, return product, no need to run rest of code
  if (array.length === 3) return array[0] * array[1] * array[2] < 0? 0: array[0] * array[1] * array[2];
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    let newArr = array.slice(0, i).concat(array.slice(i+1));
    for (let j = 0; j < newArr.length; j += 1) {
      let nNewArr = newArr.slice(0, j).concat(newArr.slice(j+1));
      for (let k = 0; k < nNewArr.length; k += 1) {
        let product = array[i] * newArr[j] * nNewArr[k];
        if (!result.includes(product)) result.push(product);
      }
    }
  }
  return Math.max.apply(null, result);
}


module.exports = highestProduct;
