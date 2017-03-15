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

 function romanNumeral(n, prev = '') {
   //throw an error if not a non-negative integer
   if (!Number.isInteger(n) || n < 0) return new Error('n is not a non-negative integer');

   //basecases
   if (n === 0) return prev;

   //recursive cases
   const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

   for(let i = 0; i < 13; i += 1) {
     if (n >= values[i]) return romanNumeral(n - values[i], prev + numerals[i]);
   }
 }

module.exports = romanNumeral;
