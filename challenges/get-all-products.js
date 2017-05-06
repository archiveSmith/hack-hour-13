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

// function getAllProducts(array) {
//   // declare a result where the products will be stored and product to hold each array.length - 1 products
//   const result = [];
//   let product;

//   // create a recursive function to iterate through the array and multiply them together
//   function product(subArr, length) {
//     // if the product is array.length - 1 long, then return the value
//     if (length === array.length - 1) {
//       result.push(product);
//       // have to divide by the last number
//       product = 1;
//       return;
//     }

//     product *= subArr[arr.length - 1];

//     return product(subArr.slice(0, array.length - 1), length++)
//   } 

//   product(array, 0);

//   return result;
// }

// function getAllProducts(array) {
//   // have a result array and a product variable
//   const result = [];
//   let history = [];
//   let product = 1;
//   // loop through array starting from the back
//   for (let i = array.length - 1; i >= 0; i -= 1) {
//     product *= array[i];
//     history.push(product);
//     // j will be the value immediately before i
//     for (let j = i - 1; j >= 0; j += 1) {
//       product *= array[j];
//       history.push(product);
//       // if it hits a multiple of array.length -1, then resset values to prev
//       if (history.length === array.length - 1) {
//         result.push(product);
//         history.pop();
//         product = history[history.length - 1];
//       } 
//     }
//   }
// }

function getAllProducts(array) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array.reduce((acc, curr, index) => {
      return index !== i ? acc * curr : acc;
    }, 1))
  }

  return result;
}

// function getAllProducts(array) {
//   return array.map((num, i, a) => { return a.slice(0, i).concat(a.slice(i + 1)).reduce((acc, curr) => { acc * curr } )})
// }

module.exports = getAllProducts;
