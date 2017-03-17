/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    return binary.split('').reverse().reduce(function (all, item, index) {
        all += (item * Math.pow(2, index));
        return all;
    }, 0);
}

// console.log(binToDec('101'));


function decToBin(decimal) {
    let pow = 0;

    //find largest power of 2 that is still less than input
    while (Math.pow(2, pow) <= decimal) {
        pow += 1;
    }
    pow -= 1;

    //starting from largest power of 2, work your way down to 2^0
    //if 2^i is less than decimal, subtract it and concat a '1' to string
    //otherwise, concat a '0'

    let result = '';
    for (let i = pow; i >= 0; i -= 1) {
        let binDigit = Math.pow(2, i);
        if (decimal >= binDigit) {
            decimal -= binDigit;
            result += '1';
        } else {
            result += '0';
        }
    };
    return result;
}

console.log(decToBin(55));
module.exports = binToDec;
