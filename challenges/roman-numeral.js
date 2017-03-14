/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let result = '';
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] <= n){
      result += roman[i];
      n -= numbers[i]
    }
  }
  
  return result; 

}

/*
see where n <= num[i] and put corresponding roman into result 
decrement n by the num[i] amount 
when n is zero, return result  
*/

//===================TESTING============================

console.log(99, romanNumeral(99))
console.log(45, romanNumeral(45))
console.log(120, romanNumeral(120))
console.log(1, romanNumeral(1))



















module.exports = romanNumeral;
