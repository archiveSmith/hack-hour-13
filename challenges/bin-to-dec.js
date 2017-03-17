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
  let number = 0;
  let level = 0;
  for (let i = 0; i < binary.length; i += 1) {
    level = Math.pow(2, binary.length - 1 - i);
    number += (level)*binary[i];
  }
  return number;
}


function decToBin(dec) {
  let level = 0;
  let number = dec;
  let bin = '';
  const recurse = (lev) => {
    if (number / Math.pow(2, lev) >= 2) {
      bin = bin.concat(recurse(lev+1)); 
    } 
    if (number / Math.pow(2, lev) >= 1) {
      number = number - Math.pow(2, lev);  // number = 1
      return bin.concat('1')
    } else if (number / Math.pow(2, lev) < 1) {
      return bin.concat('0')
    }
    return bin;  
  }
  return recurse(level);
}

module.exports = binToDec;
