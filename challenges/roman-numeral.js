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
  // using recursion... going to do it later

  // non recursive way
  const modernNums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const romanNums = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  let startNum = n;
  let romanAns = '';

  // loop through the modernNums array and decrement the amount each time
  // if less than -1, then move on to next number and do not decrement, else stay on this number
  let index = modernNums.length - 1;
  while(startNum > 0) {
    if (startNum - modernNums[index] >= 0) {
      startNum = startNum - modernNums[index]; // subtract the modernNum from the startNum
      romanAns += romanNums[index]; // Add the roman equivalent of what was taken off
    } else index -= 1
  }

  return romanAns;
}

module.exports = romanNumeral;


  // const romanNums = {
  //   '1': 'I', '4': 'IV', '5': 'V', '9': 'IX', '10': 'X', '40': 'XL', '50': 'L',
  //   '90': 'XC', '100': 'C', '400': 'CD', '500': 'D', '900': 'CM', '1000': 'M'
  // }