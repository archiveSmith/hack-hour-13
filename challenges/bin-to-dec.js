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
  if (!binary) return 'please input binary number only';
  let result = 0;
  for (let i = 0 ; i < binary.length; i += 1) {
    if (binary[i] === '1') result += Math.pow(2, binary.length - i - 1);
    if (binary[i] !== '1' && binary[i] !== '0') return 'please input binary number only';
  }
  return result;
}

module.exports = binToDec;
