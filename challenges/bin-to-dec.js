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
  let output = 0;
  const myBinaryArray = [1,2,4,8,16,32,64,128,256,512,1024,2048, 4096]

  for(let i = 0; i < binary.length; i += 1) {
    output += parseInt(binary[i]) * myBinaryArray[binary.length - i - 1]
  }
  return output;
}
module.exports = binToDec;
