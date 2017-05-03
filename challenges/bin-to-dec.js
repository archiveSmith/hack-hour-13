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
  //stores final result and value o be added depending on 0 or 1
  let result = 0;
  let digitMover = 1;
  
  //set initial condition
  if (binary.charAt(binary.length) === '1') {
    result = 1;
  }
  
  //loop from 1st digit the move up, see if 1 or 0.
  for (let i = binary.length-1; i >=0; i -= 1) {
    
  //if next digit is 1, add the value of 1 in that digit placement. If 0, just increase the next value's digit placement 
  if (binary.charAt(i) === '1') {
      result += digitMover;
      digitMover *= 2;
    } else if (binary.charAt(i) === '0') {
      digitMover *= 2;
    }
  }
  return result;
}

module.exports = binToDec;
