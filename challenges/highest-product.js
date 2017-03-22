/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let negatives = 0
  array.forEach(elem => {
    if (elem < 0) negatives++;
  })
  if (negatives % 2 !== 0 && !negatives) {
    array.sort((a,b) => {
        return b - a;
    })
    array = array.slice(0,3)
    return array.reduce((acc, curr) => {
      return acc * curr;
    }, 1);
  } else if (negatives % 2 === 0 && negatives) {
    let outputArr = [];
    array.sort((a,b) => {
        return b - a;
    })
    console.log(array)
    outputArr.push(array[0]);
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] > Math.abs(array[array.length - 1])) {
        outputArr.push(array[i]);
      } else if (array[i] < Math.abs(array[array.length - 1])) {
        outputArr.push(array[array.length - 1]);
        array.pop();
      }
    }
    outputArr = outputArr.slice(0,3)
    return outputArr.reduce((acc, curr) => {
      return acc * curr;
    }, 1);
  }
}
console.log(highestProduct([-5,-5,1,7,-6,-7,7]))
module.exports = highestProduct;
