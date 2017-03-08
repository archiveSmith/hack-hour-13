/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //if the power is 0 then return 1;
  if(power === 0) return 1;

  //if the power is less than 2 then return the base;
  if(power < 2) return base;

//Otherwise return the base times the recursive call of the base and the power till it reaches the conditions;
  return base * pow(base, (power - 1));
}

//pow(7, 2) => 49;
//pow(5, 3) => 125;
//pow(5, 0) => 1;

module.exports = pow;
