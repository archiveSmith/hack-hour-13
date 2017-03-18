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
  // var arr = (""+binary).split("");
  // var result = arr.map(function (x) {
  //   return parseInt(x, 10);
  // });
  //
  // var decimal=0;
  // for(var i=0; i<=result.length-1; i++){
  //   decimal = result[i] * Math.pow(i, 2);
  // }
  // return decimal;

  var binStr = binary.toString();
  console.log(binStr);
  var number = parseInt(binStr, 2);
  return number;
}

module.exports = binToDec;
