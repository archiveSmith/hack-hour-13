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

function romanNumeral(n) {

    let numConv = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let romConv =  ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']

    let result = '';

    for(let i = 0; i<numConv.length; i+=1){
        while(n>=numConv[i]){
            n -= numConv[i];
            result += romConv[i];
        }
    }
    return result;
}


// console.log(romanNumeral(2006));

module.exports = romanNumeral;
