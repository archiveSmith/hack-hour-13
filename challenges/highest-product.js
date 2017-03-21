/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(!Array.isArray(array)) return "Please give me an array"
  let positiveResult = 1;
  let negativeResult = 1;
  let sorted = array.sort((a,b )=>{
    return b-a;
  })
  for(let i = 0; i < 2; i++){
    positiveResult *= sorted[i]
    negativeResult *=(sorted[sorted.length -(i +1)])
  }
  if( negativeResult * sorted[0] > negativeResult * sorted[sorted.length -3]){
    negativeResult *= sorted[0]
  }else{
    negativeResult *= sorted[sorted.length -3];
  }
  positiveResult *= sorted[2];
  return positiveResult > negativeResult ? console.log(positiveResult) : console.log(negativeResult);
}

highestProduct([34,21,89, 100, 3, 5, 2, 8]) // -> 302600
highestProduct([-100, -2, 45, 2, 89]) // 17800
highestProduct([6, -3, -10, 0, 2]) // 180
highestProduct([-1, -3, -10, 0, 60])// 1800
module.exports = highestProduct;
