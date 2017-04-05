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
  var romanNumbers = [1000, 500, 100, 50, 10, 5, 1]
  var romanValues = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

  let val = '';
  let addToEnd = '';
  while(n > 0){
    for (let i = 0; i < romanNumbers.length; i+=1 ){
      if(n === romanNumbers[i]){
        val+=romanValues[i]
        n-=romanNumbers[i];
      }else if (n > romanNumbers[i]){
        if(romanNumbers[i-1]-n < n-romanNumbers[i]){
          n=romanNumbers[i-1]-n;
          addToEnd+=romanValues[i-1];
        }else{
          n-=romanNumbers[i]
          val+=romanValues[i];
        }
      }
    }

  }
  val+=addToEnd;
  addToEnd='';
  return val;
}

console.log(romanNumeral(342));

module.exports = romanNumeral;
