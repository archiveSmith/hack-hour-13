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
  let numArray = n.toString().split("");
  if (n === 0) return '';

  if (numArray.length === 1 && numArray[numArray.length - 1] === '9') { return 'IX' + romanNumeral(n - 9); }
  else if (numArray.length === 1 && numArray[numArray.length - 1] >= '5') { return 'V' + romanNumeral(n - 5); }
  else if (numArray.length === 1 && numArray[numArray.length - 1] === '4') { return 'IV' + romanNumeral(n - 4); }
  else if (numArray.length === 1) { return 'I' + romanNumeral(n - 1); }

  if (numArray.length === 2 && numArray[numArray.length - 2] === '9') { return 'XC' + romanNumeral(n - 90); }
  else if (numArray.length === 2 && numArray[numArray.length - 2] >= '5') { return 'L' + romanNumeral(n - 50); }
  else if (numArray.length === 2 && numArray[numArray.length - 2] === '4') { return 'XL' + romanNumeral(n - 40); }
  else if (numArray.length === 2) { return 'X' + romanNumeral(n - 10); }

  if (numArray.length === 3 && numArray[numArray.length - 3] === '9') { return 'CM' + romanNumeral(n - 900); }
  else if (numArray.length === 3 && numArray[numArray.length - 3] >= '5') { return 'D' + romanNumeral(n - 500); }
  else if (numArray.length === 3 && numArray[numArray.length - 3] === '4') { return 'CD' + romanNumeral(n - 400); }
  else if (numArray.length === 3) { return 'C' + romanNumeral(n - 100); }

  if (numArray.length === 4) return 'M' + romanNumeral(n - 1000);
}

module.exports = romanNumeral;
