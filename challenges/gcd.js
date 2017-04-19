/**
 * Given two integers, return the greatest common divisor(factor).
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  //if negative, make positive
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  //if b is greater than a, swap them so a is always greater 
  if (b > a) [a, b] = [b, a]
  while (true) {
    if (b === 0) return a;
    a = a % b;
    if (a === 0) return b;
    b = b % a;
  }
}

//old way to swap two variables 
 // if (b > a) {var temp = a; a = b; b = temp;}

//RECURSIVE
function gcd_rec(a, b) {
  if (b) {
    return gcd_rec(b, a % b);
  } else {
    return Math.abs(a);
  }
}

console.log( gcd(10, 158) )
console.log( gcd(48, 18) )


/*
A much more efficient method is the Euclidean algorithm, which uses a division algorithm such as long division in combination with the observation that the gcd of two numbers also divides their difference. 

To compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. 
Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. 
Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd. 

Note that we ignored the quotient in each step except to notice when the remainder reached 0, signalling that we had arrived at the answer. 

*/
module.exports = gcd;

