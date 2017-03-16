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

  const nAsString = n.toString();

  let romNumStr = '';

  const singleRomNum = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const twoRomNum = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const thirdRomNum = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const fourthRomNum = ['M', 'MM', 'MMM', 'MMMM'];

  for (let i = 0; i < nAsString.length; i += 1) {

    if (i === nAsString.length - 1 && singleRomNum[nAsString[i] - 1]) {
      romNumStr += singleRomNum[nAsString[i] - 1];
    }

    if (i === nAsString.length - 2 && twoRomNum[nAsString[i] - 1]) {
      romNumStr += twoRomNum[nAsString[i] - 1];
    }

    if (i === nAsString.length - 3 && thirdRomNum[nAsString[i] - 1]) {
      romNumStr += thirdRomNum[nAsString[i] - 1];
    }

    if (i === nAsString.length - 4 && fourthRomNum[nAsString[i] - 1]) {
      romNumStr += fourthRomNum[nAsString[i] - 1];
    }
  }
  return romNumStr;
}

module.exports = romanNumeral;
