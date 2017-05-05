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

let onesDigits = {
  1: "one", 
  2: "two", 
  3: "three", 
  4: "four", 
  5: "five", 
  6: "six",
  7: "seven",
  8: "eight", 
  9: "nine"
}
let tensDigits = {
  10: "ten", 
  11: "eleven", 
  12: "twelve", 
  13: "thirteen", 
  15: "fifteen", 
  20: "twenty",
  30: "thirty", 
  40: "forty", 
  50: "fifty",
}

function numToWords(num) {
  if(typeof num !== 'number') return "Please Submit a Number";
  let stringNum = (num).toString();
}
console.log((1000).toString().charAt(0))
module.exports = numToWords;
