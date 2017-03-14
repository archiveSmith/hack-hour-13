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
 //take as much out as possible for top denomination and add letter to string
     let romMap = [
        {'1': 'I'},
        {'4': 'IV'},
        {'5': 'V'},
        {'9': 'IX'},
        {'10': 'X'},
        {'40': 'XL'},
        {'50': 'L'},
        {'90': 'XC'},
        {'100': 'C'},
        {'400': 'CD'},
        {'500': 'D'},
        {'900': 'CM'},
        {'1000': 'M'}
    ]
    let recurse = (input) => {
        if (input == 0) return '';
        let denomObj = romMap.pop();
        let denomKey = Object.keys(denomObj)[0];
        let quant = Math.floor(input/denomKey);
        let currentVal = input % denomKey;
        let romStr = '';
        for (let i = 0; i < quant; i += 1) {romStr = romStr.concat(denomObj[denomKey])}
        romStr = romStr.concat(recurse(currentVal))
        return romStr;
    }
    return recurse(n)
}

module.exports = romanNumeral;
