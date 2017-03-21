/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length < 3) return 0;

   const negatives = array.filter((el) => { return el < 0; });

   if (negatives.length > 1) {
     return negatives.sort((a, b) => { return a - b; })[1] * Math.min(...negatives);
   }

   return array.sort((a, b) => { return b - a; })[1] * Math.max(...array);
 }

module.exports = highestProduct;
