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
    if (isNaN(n) || n <= 0) return 'Invalid input.  Should be a positive integer';
    let output = '';
    const nums = [{ val: 1000, char: 'M' },
    { val: 900, char: 'CM' },
    { val: 500, char: 'D' },
    { val: 400, char: 'CD' },
    { val: 100, char: 'C' },
    { val: 90, char: 'XC' },
    { val: 50, char: 'L' },
    { val: 40, char: 'XL' },
    { val: 10, char: 'X' },
    { val: 9, char: 'IX' },
    { val: 5, char: 'V' },
    { val: 4, char: 'IV' },
    { val: 1, char: 'I' }];

    nums.reduce((num, obj) => {
        let count = Math.floor(num / obj.val);
        for (let i = 0; i < count; i++) {
            output += obj.char;
        }
        return num - (obj.val * count);
    }, n);
    
    return output;
}

module.exports = romanNumeral;