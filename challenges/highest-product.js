/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //Edge Cases
    if (!Array.isArray(array)) return 0;
    if (array.length < 3) return 0;
    array.forEach((val) => {if (!isNaN(val)) return 0})

    let highest;
    for (let i = 0; i < array.length; i += 1) {
        let smaller = array.slice(0, i).concat(array.slice(i + 1));
        for (let j = 0; j < smaller.length; j += 1) {
            let smallest = smaller.slice(0, j).concat(smaller.slice(j + 1));
            for (let k = 0; k < smallest.length; k += 1) {
                if (highest === undefined || highest < (smallest[k] * smaller[j] * array[i])) {
                    highest = smallest[k] * smaller[j] * array[i];
                }
            }
        }
    }
    return highest;
}


module.exports = highestProduct;
