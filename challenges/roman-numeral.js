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
 let roman = ["I", "V", "X", "L", "C", "D", "M"]
 let nums =  [1, 5, 10, 50, 100, 500, 1000]
 let result = '';
 let number = n.toString()
 for(let i = 1; i <= number.length; i++){
    let temp = (number.slice(-i))
    for(let j = 0; j < nums.length; j ++){
        console.log(nums[j])
        if(nums[j].toString().length === temp.length){
            if(nums[j].toString().charAt(0) < temp.charAt(0) && nums[j + 1].toString().charAt(0) > temp.charAt(0)){
                console.log(nums[j+1])

            }
        }
    }
 }
 
}

romanNumeral(4986)
module.exports = romanNumeral;
