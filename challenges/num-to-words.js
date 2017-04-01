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
  const padded = padZero(num);
  const split = splitIntoThrees(padded);
  const hundreds = parseHundreds(split);
  return parseEverythingElse(hundreds);
}

function padZero(num) {
  let padded = num.toString();
  while(padded.length % 3 ===0) {
    padded = '0' + padded;
  }
  return padded;
}

function splitIntoThrees(str) {
  //make 123,342 into [[1,2,3],[342]]
  const split = [];
  let chunk = [];
  
  for (let i = 0; i < str.length; i += 1) {
    chunk.push(str.charAt(i));
    //111[2], 222[5], 333[8]
    if (i % 3 === 2) {
      split.push(chunk);
      chunk = [];
    }
  }
  return split;
}

function parseHundreds(arr) {
  const numToWord = {
    '0': 'Zero',
    '1': 'One',
    //fill in rest between 1-9
    '9': 'Nine'
  };
  const numToTens = {
    '1': 'Ten',
    '2': 'Twenty',
    //fill in rest between 1-9
    '9': 'Ninety'
  };


  return arr.map(chunk => {
    return chunk.map((digit, i) => {
      if (i === 1) return numToTens[digit];
      if (i ===0) return numToWord[digit] + 'Hundred';
      return numToWord[digit];
    })
  }).map(chunk => chunk.filter(num=> num !== 'Zero'))
    .map(chunk => chunk.reduce((acc, curr) => acc.concat(curr)))
    .map(chunk => {
      chunk = chunk,replace('TenOne', 'Eleven');
      chunk = chunk,replace('TenTwo', 'Twelve');
     //fill in rest 
      chunk = chunk,replace('TenNine', 'Nineteen');
      return chunk;
    })
}

function parseEverythingElse(arr) {
  const places = {
    '0': '',
    '1': 'Thousand',
    '2': 'Million',
    //etc. 
  }
  return arr.reverse().map((chunk, i) => chunk + places[i]).reverse()
            .reduce((a,c) => a.concat(c));
}


/*
stringify and pad zeros to front to make groups of 3s
split to 3s [['0','1','2',], ['3','8','9'],['4','6','7']]
parse threes (hundred)->[[Twelve],[ThreeHundredEigty],[FourHundredSixtySeven]]

*/
//=======================TESTING========================================

console.log( numToWords(0), '__SHOULD BE__Zero' );
console.log( numToWords(43), '__SHOULD BE__FortyThree' );
console.log( numToWords(11-19), "__SHOULD BE__['Eleven', 'Twelve', 'Thirteen', 'Nineteen']" );
//console.log( numToWords(2999), '__SHOULD BE__TwoThousandNineHundredNintyNine' );
//console.log( numToWords(2483579411), '__SHOULD BE__TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven' );


/*
INPUT: NUMBER 
OUTPUT: string 
----------------
how many digits it has determines if need hundred, thousand, million, etc. 
need to deal with th and rd endings 
//-----------------------------------
1 index: [zero, one, two, three...]
2+ indexes 
  with penultimate === 1 tiesString = [ten, eleven, twelve, thirteen, fourteen...]
  with penultimate > 1  tiesString = [twenty, thirty] + [first, second, third, fourth, fifth...]
3+ indexes: hundredString = add number[0] + 'hundred' + tiesString  
4+ indexes: thousandString = add number[0] + 'thousand' + hundredString + tiesString
//---------------
split number into an array so can deal with each digit individually
determine length of array so know which if block to start on?  thousands, hundreds, etc. 
another way not using if blocks? 
//---------------------------------------
[zero, one, two, three, four, five, six, seven, eight, nine]
[eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen]
[ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety]
[million, thousand, hundred]  

*/










module.exports = numToWords;
