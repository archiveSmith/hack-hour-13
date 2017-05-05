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

// function binToDec(binary) {
//    if (binary === '0') return 0;
//   let arr = []
//   for (let i = binary.length - 1; i >= 0; i--) {
//     arr.push(Math.pow(2, i))
//   }
// //return  parseInt(binary, 2)
// }


//
function binToDec(binary){
  let modifier = 1; 
  let total = 0;

  for(let i = binary.length -1; i >=0; i -= 1){
    total = total += parseInt(binary[i]) * modifier;
    modifier *= 2;
  }
  return total
}
console.log(binToDec('101100101'))//   -> 357
console.log(binToDec('11')) // -> 3
console.log(binToDec('100'))// -> 4
console.log(binToDec('101'))// -> 5
console.log(binToDec('0101'))// -> 5
module.exports = binToDec;
