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
  const binArr = binary.split('').map(Number);
  const base = 2;
  let exp = 0;
  let sum = 0;

  for (let i = binArr.length - 1; i >= 0; i -= 1) {
    if (binArr[i] === 1) {
      sum += (base ** exp);
    }
    exp += 1;
  }
  return sum;
}

module.exports = binToDec;
