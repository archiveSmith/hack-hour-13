/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   // set some exponent rules:
   if(power === 1) return base;
   if(power === 0) return 1;

   //for positive power
   if(power > 0) {
     return pow(base,power-1) * base;
   }
   //for negative power
   else if (power < 0) {
     power = Math.abs(power);
     let toInverse = pow(base,power-1) * (base);
     return 1/toInverse;
   }
 }

module.exports = pow;
