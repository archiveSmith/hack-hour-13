/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let maxDiv = 0;

    for(let i = 1; i <= a; i += 1) {
        if(a % i === 0 && b % i === 0) {
            if (i > maxDiv) maxDiv = i;
        }
    }
    return maxDiv;
}

module.exports = gcd;