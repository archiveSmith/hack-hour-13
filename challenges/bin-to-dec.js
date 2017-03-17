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
  // convert to Binary - Recursion
  // binary = binary.split('').reverse().join('');
  // let startPos = -1;

  // function bin2Dec(bin, start) {
  //   if (!bin.length) return 0;
  //   return bin[0] * Math.pow(2, start + 1) + bin2Dec(bin.slice(1), start + 1);
  // }

  // return bin2Dec(binary, startPos);


  // convert to Hexadecimal - Recursion // not complete
  binary = binary.split('').reverse().join('');
  let startPos = -1;

  function bin2Dec(bin, start) {
    if (!bin.length) return 0;
    return bin[0] * Math.pow(2, start + 1) + bin2Dec(bin.slice(1), start + 1);
  }

  return bin2Dec(binary, startPos);
}


console.log(binToDec('0'));   
console.log(binToDec('11')); 
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('0101'));


module.exports = binToDec;
