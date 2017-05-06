/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, because zero might be in the array and you cannot divide by zero
 */

//-------quadratic time since double loop O(n^2)------------------
function getAllProducts(array) {
  let sum = [];
  for (let i = 0; i < array.length; i += 1) {
    let slicedArr = array.slice(0, i).concat(array.slice(i + 1));
    let product = slicedArr.reduce((product,b) => product * b, 1);
    sum.push(product);
  }
  return sum;
}

//----------same as above but with map-----------------------
function getAllProducts2(array){
  return array.map((num, i, arr) => 
    arr.slice(0, i).concat(arr.slice(i + 1))
      .reduce((prod, n) => prod * n, 1)
  )
}

//////////////////////////////////////////////////////
console.log( getAllProducts2([1,7,3,4]) )


/*
all possible products of multiplying 3 out of 4 numbers
OUTPUT: array of possible products 

combinations b/c order doesn't matter but always need 3 numbers; 
recursion or double loop? 

*/



module.exports = getAllProducts;
