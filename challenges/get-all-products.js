/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

 function getAllProducts(array) {
   if (!array.length) return [0];
   if (array.length === 1) return array;
   let allProds = [];
   // iterate through the array
   // at each element, concat to allProds
   // when there is one element, find the product of the last 3 elements in allProds
   // for the base case, have it for when array is at a length of 1
   for (let i = 0; i < array.length; i += 1) {
     let restOfNums = array.slice(0,i).concat(array.slice(i+1));
     allProds.push(restOfNums.reduce((acc,curr) => acc *= curr));
   }
   return allProds;
 }

module.exports = getAllProducts;
