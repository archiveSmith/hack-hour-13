/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let maxArr = array.sort(function (a, b) {
        return b-a;
    });
    
    let maxRes = maxArr[0] * maxArr[1] * maxArr[2];
    let negatives = maxArr.filter((item) => {
        return item < 0;
    })
    let tempPos = maxArr[0] * maxArr[1];
    let tempNeg;

    if (negatives.length <= 1) {return maxRes}
    
    if (negatives.length >= 2) {
        negatives.sort(function (a, b) {return a - b;})
        tempNeg = negatives[0] * negatives[1];
        console.log(tempNeg);
    }

    if (tempNeg > tempPos) {
        return tempNeg * maxArr[0];
    } else {
        return maxRes;
    }
}


module.exports = highestProduct;
