/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // use an accumulator that is the product of the answers so far and y-1
    // 2^3 --> 2^2 --> 2^1 --> 1
    // console.log("pow is executing, base is "+base+" power is "+power);
    if(power === 0) return 1;
    // var product;
    if(power > 0){
        return base * pow(base, power - 1);
    }
    else{
        return 1/pow(base, -power);
    }
}

console.log(pow(0,0));
module.exports = pow;
