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
  const a = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
             'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const b = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const c = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  const str = num.toString();

  const chunks = [];
  while ( str.length > 0 ) {
    chunks.push(str.slice((str.length = Math.max(0, str.length - 3)), str.length));
  };

  const chunkWords = chunks.map(chunk => {
    let chunkArr = chunk.split('');
    let chunkWord = '';
    if (chunkArr.length === 3 && chunkArr[0] > 0) {
      chunkWord += `${a[chunkArr[0]]Hundred`;
    }
    if (chunk.length === 2 || chunk.slice(0, 1) === '0') {

    } else {
      
      for (let i = 0; i < 3; i += 1) {
        chunkWord += `${}Hundred`
      }
    }
  });

  for (let i = 0; i < chunks.length; i += 1) {
    if (n.length)
  }

}

module.exports = numToWords;
