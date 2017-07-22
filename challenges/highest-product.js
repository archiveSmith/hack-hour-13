/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  
  let high = Math.max(array[0], array[1]);
  let low = Math.max(array[0], array[1]);

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

//not complete. Doesn't work for [-2,-1,1,3,4] for example

// function highestProduct(array) {
//   if (!Array.isArray(array)) return 0;
// 	if (array.length < 3) return 0;
 
  
//   array = array.sort((b, a) => {
//     return b - a;
//   })
  
//   let posArr = array.filter(n => {
//     return n >= 0;
//   })
  
//   let negArr = array.filter(n => {
//     return n < 0;
//   })
  
//   if (negArr.length >= 2 && posArr.length > 0) {
//     return negArr[0] * negArr[1] * posArr[posArr.length - 1];
//   } else if (posArr.length >= 3 && negArr.length < 2) {
//       return posArr[posArr.length - 1] * posArr[posArr.length - 2] * posArr[posArr.length - 3]; 
//   } else if (posArr.length === 2 && negArr.length > 0) {
//     return posArr[posArr.length - 1] * posArr[posArr.length - 2] * negArr[negArr.length - 1];
//   } else {
//     return negArr[negArr.length - 1] * negArr[negArr.length - 2] * negArr[negArr.length - 3];
//   }
// }