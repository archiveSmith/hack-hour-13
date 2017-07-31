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

 // Initialize ONES array
 // Initialize TENS array
 // Initialize PLACES array

 // Helper Function (convertToString)
  // Convert the input number to a string
    // Should be able to break up into threes
    // Add zeros to front of string until it's divisible by 3

 // Helper Function (chunkInThrees)
  // Break string into and array of number strings chunked into threes

 // Helper Function (parseChunk)
  // Takes in one chunk and parses it
  // Convert each number in the String to its corresponding English word representation
  // If the first element is not '0' we want to append 'Hundred' to its name
  // Output: English word representaion of chunk

 // Helper Function (parseChunksArray)
  // Takes in array of chunks and parses it
  // Passes each chunk into parseChunk helper function
  // Adds correct PLACE value to each passed in chunk
  // Output : English word representation of the input number

 // numToWords
  // Initalize variables equal to the return value of each helper function
    // Input number as a string
    // String as an array of chunks
  // Return value of final helper function

const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const PLACES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'];

// Convert the input number to a string (must be divisible by 3)
function convertToString(num) {
  num = String(num);

  while (num.length % 3 !== 0) {
    num = `0${num}`;
  }
  return num;
}

// Chunk number string into chunks of three and push each chunk to an array
function chunkInThrees(string) {
  const chunksArray = [];

  for (let i = 0; i < string.length; i += 3) {
    chunksArray.push(string.substring(i, i + 3));
  }
  return chunksArray;
}

// Parse given chunk of chunkArray
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

// Parse the array of chunked strings into respective words
function parseChunksArray(array) {
  let parsedString = '';

  for (let i = 0; i < array.length; i += 1) {
    const placement = array.length - i - 1;

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

console.log(numToWords(2154));

module.exports = numToWords;
