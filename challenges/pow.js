/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   if (!base) return 'Need base value to proceed';
   if (arguments.length < 2) return NaN;
   if (power < 0) {
     return pow(base, power+1) / base;
   } else if (power === 0) {
     return 1;
   } else {
     if (power === 1) return base;
     else return base * pow(base, power-1);
   }
 }

module.exports = pow;

/*
 *
 *
*/
