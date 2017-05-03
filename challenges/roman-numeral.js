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
  let arabicNum = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum = ['M', 'CM', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let vessel = '';

  for (let i = 0; i < arabicNum.length; i += 1) {
    while(n >= arabicNum[i]) {
      //need if condition on 4 and 9
      n = n - arabicNum[i];
     vessel = vessel.concat(romanNum[i]);
    }
  }
  return vessel;
}

module.exports = romanNumeral;
