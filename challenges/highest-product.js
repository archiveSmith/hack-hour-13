/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) return 0;
  
  array = array.sort((b, a) => {
    return b - a;
  })
  
  let posArr = array.filter(n => {
    return n >= 0;
  })
  
  let negArr = array.filter(n => {
    return n < 0;
  })
  
  if (negArr.length >= 2 && posArr.length > 0) {
    return negArr[0] * negArr[1] * posArr[posArr.length - 1];
  } else if (posArr.length >= 3 && negArr.length < 2) {
      return posArr[posArr.length - 1] * posArr[posArr.length - 2] * posArr[posArr.length - 3]; 
  } else if (posArr.length === 2 && negArr.length > 0) {
    return posArr[posArr.length - 1] * posArr[posArr.length - 2] * negArr[negArr.length - 1];
  } else {
    return negArr[negArr.length - 1] * negArr[negArr.length - 2] * negArr[negArr.length - 3];
  }
}


module.exports = highestProduct;
