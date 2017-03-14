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
  if (typeof n !== 'number' || n < 0) return 'PLEASE ENTER A VALID NUMBER'
  n = n.toString();
  let output = '';

  let thousands = n.length - 4;
  if (n[thousands] < 4) output += 'M'.repeat(n[thousands]);
  if (n[thousands] == 4) output += 'MV';
  if (n[thousands] == 5) output += 'V';
  if (n[thousands] > 5 && n[thousands] < 9) output = 'V' + 'M'.repeat(n[thousands] - 5);

  let hundreds = n.length - 3;
  if (n[hundreds] < 4) output += 'C'.repeat(n[hundreds]);
  if (n[hundreds] == 4) output += 'CD';
  if (n[hundreds] == 5) output += 'D';
  if (n[hundreds] > 5 && n[hundreds] < 9) output = 'D' + 'C'.repeat(n[hundreds] - 5);
  if (n[hundreds] == 9) output += 'XC';

  let tens = n.length - 2;
  if (n[tens] < 4) output += 'X'.repeat(n[tens]);
  if (n[tens] == 4) output += 'XL';
  if (n[tens] == 5) output += 'L';
  if (n[tens] > 5 && n[tens] < 9) output = 'L' + 'X'.repeat(n[tens] - 5);
  if (n[tens] == 9) output += 'XC';

  let ones = n.length - 1;
  if (n[ones] < 4) output += 'I'.repeat(n[ones]);
  if (n[ones] == 4) output += 'IV';
  if (n[ones] == 5) output += 'V';
  if (n[ones] > 5 && n[ones] < 9) output += 'V' + 'I'.repeat(n[ones] - 5);
  if (n[ones] == 9) output += 'IX';

  return output;
}


module.exports = romanNumeral;
