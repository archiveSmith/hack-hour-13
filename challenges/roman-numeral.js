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
  const romanNum = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M' };

  const strArr = [];
  let i = 1;
  let m = n;
  while (m > 0) {
    const rom = m % 10;
    if (rom < 4) {
      strArr.unshift(romanNum[1 * i].repeat(rom));
    } else if (rom === 4) {
      strArr.unshift(romanNum[4 * i]);
    } else if (rom === 5) {
      strArr.unshift(romanNum[5 * i]);
    } else if (rom > 5 && rom < 9) {
      strArr.unshift(romanNum[5 * i]+romanNumber[1 * i].repeat(rom));
    } else if (rom === 9) {
      strArr.unshift(romanNum[9 * i]);
    } else {
      strArr.unshift(romanNum[1 * i].repeat(rom));
    }
    m = ((m - (m % 10)) / 10)
    i *= 10;
  }

  return strArr.join('');
}

module.exports = romanNumeral;
