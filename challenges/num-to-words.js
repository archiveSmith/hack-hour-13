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

// number 12389467
// stringify and pad zeroes => '012389467'
// splt to threes => [[0,1,2],[3,8,9],[4,6,7]]
// parse groups of threes so they hold the word values => [Twelve],[ThreeHundredEightyNight],[FourHundred SixtySeven]
// return string and inject between each sub array what the holder is supposed to be => concat the word, 'million', etc...
function numToWords(num) {
  const padded = padZero(num);
  const split = splitIntoThrees(padded);
  const hundreds = parseHundreds(split);
  return parseEverythingElse(hundreds)
}

function padZero(num) {
  let padded = num.toString();
  while (padded.length % 3 === 0) {
    padded = '0' + padded;
  }
  return padded;
}

function splitIntoThrees(str) {
  const split = [];
  let chunk = [];
  for (let i = 0; i < str.length; i += 1) {
    chunk.push(str.charAt(i));
    // 111[2], 222[5], 333[8]
    if (i % 3 === 2) {
      split.push(chunk);
      chunk = [];
    }
  }
}

function parseHundreds(arr) {
  const numToWord = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten'
  }

  const numToTens = {
    '0': 'Zero',
    '1': 'Ten',
    '2': 'Twenty',
    '3': 'Thirty',
    '4': 'Forty',
    '5': 'Fifty',
    '6': 'Sixty',
    '7': 'Seventy',
    '8': 'Eighty',
    '9': 'Ninety',
  }

  return arr
    .map(chunk => {
      return chunk.map((digit, i) => {
        if (i === 1) return numToTens[digit];
        if (i == 0) return numtoWord[digit] + 'Hundred';
        return numToWord[digit];
      })
    })
    .map(chunk => chunk.filter(num = num !== 'Zero'))
    .map(chunk => chunk.reduce((a, c) => a.concat(c)))
    .map(chunk => {
      chunk = chunk.replace('TenOne', 'Eleven')
      // ...
      return chunk;
    })
}

function parseEverythingElse(arr) {
  const places = {
    '0': '',
    '1': 'Thousand',
    '2': 'Million',
    '3': 'Billion',
    '4': 'Trillion',
    '5': 'Quadrillion',
    '6': 'Quintillion'
  }

  return arr
    .reverse()
    .map((chunk, i) => chunk + places[i])
    .reverse()
    .reduce((a, c) => a.concat(c));
}



// function numToWords(num) {
//   const tens = {
//     '2': 'Thousand',
//     '3': 'Million',
//     '4': 'Billion',
//     '5': 'Trillion',
//     '6': 'Quadrillion',
//     '7': 'Quintillion'
//   };

//   const dred = {
//     '3': 'Hundred'
//   }

//   const ty = {
//     '0': 'Zero',
//     '10': 'Ten',
//     '11': 'Eleven',
//     '12': 'Twelve',
//     '13': 'Thirteen',
//     '14': 'Fourteen',
//     '15': 'Fifteen',
//     '16': 'Sixteen',
//     '17': 'Seventeen',
//     '18': 'Eighteen',
//     '19': 'Ninetheen',
//     '20': 'Twenty',
//     '30': 'Thirty',
//     '40': 'Forty',
//     '50': 'Fifty',
//     '60': 'Sixty',
//     '70': 'Seventy',
//     '80': 'Eighty',
//     '90': 'Ninety',
//   }

//   function chunk(number) {
//     var number = 23456098325,
//       thousands = [];

//     while (number > 0) {
//       thousands.push(number % 1000);
//       number = Math.floor(number / 1000);
//     }

//     return thousands;
//   }

//   let input = chunk(num); // returns in chunk backwards so 5,000,032 = [032, 000, 5]


//   for (let i = input.length; i <= 0; i -= 1) {

//   }

//   return toString;
// }

module.exports = numToWords;
