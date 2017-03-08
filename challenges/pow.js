/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let result = 1;
    let counter = 0;
    if (power === 0) {
        return 1;
    } else {
        while(counter <= power) {
          result = base * pow(base, power - 1);
          counter++;
        }
    }
  return result;
}

module.exports = pow;
