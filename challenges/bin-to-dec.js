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
    if (typeof binary !== 'string') return 'Input needs to be a string.'
    for (let i = 0; i < binary.length; i += 1) {
        if (binary.charAt(i) !== '0' && binary.charAt(i) !== '1') return 'Input needs to be in binary.'
    }
    return binary.split('').reverse().reduce((accum, val, idx) => {return accum += val * Math.pow(2, idx)}, 0);    
}

module.exports = binToDec;
