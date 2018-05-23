/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  let high = Math.max(array[0], array[1]);
  let low = Math.min(array[0], array[1]);

  let high2 = array[0] * array[1];
  let low2 = array[0] * array[1];
  
  let high3 = array[0] * array[1] * array[2];
  
  for (let i = 2; i < array.length; i += 1) {
    //needs to be in this order:
    high3 = Math.max(high3, array[i] * high2, array[i] * low2);
    
    //otherwise, could end up array[i] and high being the same thing and thus mutiplying by itself.
    high2 = Math.max(high2, array[i] * high, array[i] * low);
    low2 = Math.min(low2, array[i] * low, array[i] * high);
      
    low = Math.min(low, array[i]);
    high = Math.max(high, array[i]);
  }
  return high3;
}

module.exports = highestProduct;

//alt solution using sort:
// function highestProduct(array) {
//   if (!Array.isArray(array) || !array || array.length < 3) return 0;

//   array.sort((a,b) => a - b);
//   const useSmalls = array[0] * array[1] * array[array.length - 1];
//   const useBigs = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
//   return Math.max(useSmalls, useBigs);
// }