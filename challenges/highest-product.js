/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //if not an array, or array given doesn't have 3 elements, return 0.
    if(array.length < 3 || !Array.isArray(array)) return 0;

    let posArray = array.filter((num) => { return num >= 0}).sort((a,b) => {return a<b});
    let negArray = array.filter((num) => { return num < 0}).sort((a,b) => {return a>b});

    let positiveAcc;

    posArray.length > 2 ? postitiveAcc = posArray.splice(0,3).reduce((acc,val) => {return acc*val}) : console.log("less than 3 positives");

    let negativeAcc = negArray.splice(0,2).reduce((acc, val) => {return acc*val})*posArray[0];

    positiveAcc > negativeAcc? return positiveAcc : return negativeAcc;

    console.log(posArray);
}

let arr = [1,-2,3,-4,5,-6,7,-8,9];
highestProduct(arr);

module.exports = highestProduct;
