/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    if(!Array.isArray(array) || array.length < 3) return 'err';
    
    let sortedArr = array.sort((a,b) =>{return a-b})
    let allNeg = sortedArr.reduce((all,item,index)=>{
        if(item > 0) all = false;
        return all;
    },true)
    if(allNeg) return sortedArr.slice(sortedArr.length-3).reduce((all,item,index)=>{all *= item; return all});

    return Math.max(sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length-1], sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2] * sortedArr[sortedArr.length-3])

}

console.log(highestProduct([-1,-2,-4]));

module.exports = highestProduct;
