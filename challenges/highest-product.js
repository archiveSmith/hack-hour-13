/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length < 3 || !Array.isArray(array)) return 0;

   const arr = array.sort((a, b) => { return b - a; });
   const len = arr.length;

   return Math.max(arr[0] * arr[1] * arr[2], arr[0] * arr[len - 1] * arr[len - 2]);
}

module.exports = highestProduct;
