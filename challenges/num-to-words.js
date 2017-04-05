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
  const numbers = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
  }

  const multiples = {
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety"
  }

  const places = {
    "3": "hundred",
    "4": "thousand",
    "7": "million",
    "10": "billion",
    "13": "trillion",
    "16": "quadrillion"
  }

  let numStr = num.toString()
  let numLength = numStr.length;
  let primKeys = Object.keys(numbers);

  let ansStr = '';
  if (numLength <= 2) {
    if (primKeys.indexOf(numStr) > -1) {
      return numbers[primKeys.indexOf(numStr)];
    } else {
      ansStr+= multiples[numStr[0]] + numbers[numStr[1]];
      return ansStr; 
    }
  }else if(numLength === 3){
    ansStr += numbers[numStr[0]] + places[numLength] + numToWords(parseInt(numStr.substring(1, numStr.length)));
    return ansStr;
  }
}


console.log(numToWords(563));

module.exports = numToWords;
