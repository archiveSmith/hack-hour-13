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
  return parseInt(Number(binary), 2)
}

function decToBin(dec) {
  return dec.toString(2);
}

function decToHex(dec) {
  return dec.toString(16);
}
//===================TESTING===============================
console.log( binToDec('0')    )//0
console.log( binToDec('11')   )//3
console.log( binToDec('100')  )//4
console.log( binToDec('101')  )//5
console.log( binToDec('0101') ) //5
console.log('__________________')
console.log( decToBin(0)  ) 
console.log( decToBin(3)  )
console.log( decToBin(4)  )
console.log( decToBin(5)  )
console.log('__________________')
console.log( decToHex(0)   )
console.log( decToHex(0.45)  )
console.log( decToHex(3.3)  )
console.log( decToHex(4.8)  )
console.log( decToHex(5.9) )





module.exports = binToDec;
