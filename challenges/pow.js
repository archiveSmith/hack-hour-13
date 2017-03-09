/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let res = base;

    //edge cases
    if(power === 0) return 1;

    //negative exponents
    if(power < 0) return 1 / pow(base,-power);

    //positive exponents
    if(power>= 1){

    return power === 1 ? base : res = res * pow(base,power-1);

    }
}

console.log(pow(3,.5));
// module.exports = pow;
