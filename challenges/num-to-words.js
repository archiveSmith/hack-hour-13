// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  const nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,
    60,70,80,90,100,1000,1000000,1000000000,1000000000000,1000000000000000];
  const strings = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Thirty', 'Forty',
    'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred', 'Thousand',
    'Million', 'Billion', 'Trillion', 'Quadrillion'];

  let i = 0;
  while(num >= nums[i]) i += 1;
  i -= 1;

  if (i < 20) return strings[i];
  if (i < 28 && num !== nums[i]) return strings[i] + numToWords(num - nums[i]);
  if (i < 28) return strings[i];

  const multiplier = Math.floor(num / nums[i]);
  if (multiplier === 1 && num !== nums[i]) return strings[i] + numToWords(num - nums[i]);
  if (multiplier === 1) return strings[i];
  return numToWords(multiplier) + strings[i] + numToWords(num - multiplier*nums[i]);
}

module.exports = numToWords;
