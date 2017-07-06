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

// Input - number
// Output - string, number input represented as a word (Camel Case, and spaces aren't necessary)

// Look for any patterns
  // What patterns do you recognize?
  // Numbers are read in chuncks of Three

// Psuedocode
// Convert the input number to a string
  // Should be able to break up into threes
  // Add zeros to front of string until it's divisible by 3
// Break string into and array of number strings chunked into threes
// Input: Array of number strings
  // Convert every string of numbers to its name
  // Add 'thousand' etc. as necessary
// Output : Translated string
// Input : String of 3 numbers
  // Convert each number in the String to its name
  // If the first element is not zero, append 'Hundred' to its name
// Output: String the translated names together

const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const PLACES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'];

function convertToString(num) {
  num = String(num);
  // Add zeros to string until it's divisible by 3
  while (num.length % 3 !== 0) {
    num = `0${num}`;
  }
  return num;
}

function chunkInThrees(string) {
  const chunksArray = [];

  for (let i = 0; i < string.length; i += 3) {
    chunksArray.push(string.substring(i, i + 3));
  }
  return chunksArray;
}

function parseChunk(chunk) {
  let parsedChunk = '';

  if (chunk[0] !== '0') parsedChunk += ONES[chunk[0]] + 'Hundred';
  parsedChunk += TENS[chunk[1]];
  parsedChunk += ONES[chunk[2]];

  return parsedChunk
   .replace('TenOne', 'Eleven')
   .replace('TenTwo', 'Twelve')
   .replace('TenThree', 'Thirteen')
   .replace('TenFour', 'Forteen')
   .replace('TenFive', 'Fifteen')
   .replace('TenSix', 'Sixteen')
   .replace('TenSeven', 'Seventeen')
   .replace('TenEight', 'Eighteen')
   .replace('TenNine', 'Nineteen');
}

function parseChunksArray(array) {
  let parsedString = '';

  for (let i = 0; i < array.length; i += 1) {
    // Placement will give us the correct index for the value in our PLACES array
    const placement = array.length - i - 1;
    // Pass in the chunk concatonated with our place
    parsedString += parseChunk(array[i]) + PLACES[placement];
  }
  return parsedString;
}

function numToWords(num) {
  if (num === 0) return 'Zero';

  const numStr = convertToString(num);
  const chunksArr = chunkInThrees(numStr);

  return parseChunksArray(chunksArr);
}

// console.log(numToWords(0));

module.exports = numToWords;
