/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let negatives = [];
  let positives = [];
  let biggestComb2 = 0;
  let smallestNegNum;

  // if length of array is less than 3, return 0
  if (array.length < 3) return 0;

  // count the negative numbers first
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0) {
      negatives.push(array[i]);

      if (negatives.length >= 3) {  // if length is greater than 3, sort
        negatives.sort((a, b) => a - b);
        if (negatives.length >= 4) {  // if length is greater than 4, pop off the last one
          let save = negatives.pop();
          if (smallestNegNum === undefined || smallestNegNum < save) {
            smallestNegNum = save;
          }
        }
      }
    } else {
      positives.push(array[i]); // for the positives numbers

      if (positives.length >= 3) {
        positives.sort((a, b) => b - a);
        if (positives.length >= 4) {
          positives.pop();
        }
      }
    }
  }

  negatives.sort((a, b) => a - b); // -10, -9, -8
  positives.sort((a, b) => b - a); // 5, 4, 3

  if (negatives.length >= 2) {
    biggestComb2 = negatives[0] * negatives[1];
  }

  // checks for the largest combination of 2 numbers!
  if (positives.length >= 2) {
    if (positives[2] * positives [1] < biggestComb2) {
      return biggestComb2 * positives[0];
    } else return positives[0] * positives[1] * positives[2];
  } else if (positives.length === 1) {
    return positives[0] * biggestComb2;
  } else return smallestNegNum * biggestComb2;
}


// console.log(highestProduct([-5,  5, 3, -5, 4]))
// console.log(highestProduct([-1, -10, -5, -3, -2, -10]))


module.exports = highestProduct;
