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

function getAllProducts(chars) {
var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  result = result.filter(numbers => numbers.length === chars.length-1)
  return result.map(function(e){
  	
  	return e.split('').reduce(function(acum, next){
  		return acum * +next
  	})
  });
  
  
}
let result = getAllProducts([1, 7, 3, 4]); //->  [84, 12, 28, 21]
console.log('the result ', result);

module.exports = getAllProducts;
