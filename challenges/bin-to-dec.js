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
  
    if (typeof binary === 'string') {
      return parseInt(binary, 2);
    }
    return decToBin(binary);
}

//Solution not utilizing helpers
// function binToDec(binary) {
//     var len = binary.length;
//     var dec = 0;
//     var BASE = 2;
//     for (var i = 0; i < len; i += 1) {
//         dec+=binary[i] * Math.pow(BASE, len-1-i);
//     }
//     return dec;
// }


function decToBin (decimal) {
  return decimal.toString(2);
}

module.exports = binToDec;
