/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //check for array 
  if (!Array.isArray(array)) return "Please give me an array"
  if (array.length < 3) return 0;
  let positiveResult = 1;
  let negativeResult = 1;
  //sort array from greatest to least 
  let sorted = array.sort((a, b) => {
    return b - a;
  })

  for (let i = 0; i < 2; i++) {
    positiveResult *= sorted[i]
    negativeResult *= (sorted[sorted.length - (i + 1)])
  }
  if (negativeResult * sorted[0] > negativeResult * sorted[sorted.length - 3]) {
    negativeResult *= sorted[0]
  } else {
    negativeResult *= sorted[sorted.length - 3];
  }
  positiveResult *= sorted[2];
  return positiveResult > negativeResult ? positiveResult : negativeResult;
}

highestProduct([34, 21, 89, 100, 3, 5, 2, 8]) // -> 302600
highestProduct([-100, -2, 45, 2, 89]) // 17800
highestProduct([6, -3, -10, 0, 2]) // 180
highestProduct([-1, -3, -10, 0, 60])// 1800
module.exports = highestProduct;
console.log([1,2,3].length)