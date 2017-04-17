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
   if(typeof binary !== "string") return "invalid input."
   let val = Math.pow(2, binary.length-1);
   let dec = parseInt(binary.charAt(binary.length-1));
   for (let i = 0; i < binary.length - 1; i += 1){
     if(binary.charAt(i) === "1") dec+=val;
     val/=2;
   }
   return dec;
 }

module.exports = binToDec;
