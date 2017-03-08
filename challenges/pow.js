/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let res = base;

    return power === 1 ? base : res = res * pow(base,power-1);
}

console.log(pow(2,3));
// module.exports = pow;
