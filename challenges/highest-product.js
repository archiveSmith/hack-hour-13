/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//     if (array.length < 3) {
//         return 0;
//     }

//     let maxArr = array.sort(function (a, b) {
//         return b-a;
//     });
    
//     let maxRes = maxArr[0] * maxArr[1] * maxArr[2];
//     let negatives = maxArr.filter((item) => {
//         return item < 0;
//     })
//     let tempPos = maxArr[0] * maxArr[1];
//     let tempNeg;

//     if (negatives.length <= 1) {return maxRes}
    
//     if (negatives.length >= 2) {
//         negatives.sort(function (a, b) {return a - b;})
//         tempNeg = negatives[0] * negatives[1];
//         console.log(tempNeg);
//     }
//     else if (negatives.length === array.length) {
//       negatives.sort(function(a, b) {
//         return a-b;
//       })
//       return negatives[0] * negatives[1] * negatives[array.length - 1];
//     }

//     if (tempNeg > tempPos) {
//         return tempNeg * maxArr[0];
//     } else {
//         return maxRes;
//     }
// }

function highestProduct (array) {
    if (array.length < 3 || !Array.isArray(array)) {
        return 0;
    }

    array = array.sort(function (a, b) {
        return a - b;
    });

    let first = array[0] * array[1] * array[array.length - 1];
    let second = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];

    return Math.max(first, second);
}


module.exports = highestProduct;
