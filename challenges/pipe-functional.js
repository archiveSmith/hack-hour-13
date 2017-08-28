/* * FUNCTIONAL PROGRAMMING
 * You will not be creating any variables in this hack hour other than functions
 *
 * Not for the weak of heart. I challenge you.
 * Every single one of these functions can be written in one line :)
 */

/*
 * PART 1
 * Create a function ‘H’
 * Its going to take in a single variable called letters
 * It will return 1 of two things
 * 1. The letter ‘H’ plus the passed in letters
 * 2. if there is no argument passed in just the letter ‘H’
 * H(‘ello’); // -> ‘Hello’
 * H(); // -> ‘H’
 */

function H(letters) {
  
}

// OR

// const H = (letters) =>;







/*
 * PART 2
 * Create three more functions with the same functionality
 * But with the letters ‘e’, ‘l’, and ‘o’
 * e(‘llo’); // -> ‘ello’
 * l(‘lo’); // -> ‘llo’
 * l(‘o’); // -> ‘lo’
 * o(); // -> ‘o’
 */

function e(letters) {

}

function l(letters) {

}

function o(letters) {

}

// const e = (letters) =>;
// const l = (letters) =>;
// const o = (letters) =>;





/*
 * PART 3 PIPE
 * Create a function ‘pipe’ that will take in an array of functions.
 * It will then return a function that takes one input, a starting value
 * This inner function will call all the functions in the passed in array
 * It will pass each function’s returned result into the next function call
 * If there is a starting value it will plug it in as the input to the first function called
 * const hello = pipe([H, e, l, l, o]); // -> [function]
 * hello(); // -> ‘Hello’
 * const ello = pipe([e, l, l, o]); // -> [function] --NOT TRUE
 * ello(‘J’); // -> ‘Jello’ -- NOT TRUE
 */

function pipe(functions) {

}

// OR

// const pipe = (functions) =>;





/*
 * PART 4 DYNAMIC FUNCTION CREATION
 * Imagine if you had to create all strings in this manner.
 * You would have to create a function for every single possible character.
 * How can we abstract that out into a function
 * Create a function letterGenerator
 * It will abstract out the functionality of those earlier defined letter functions
 * It is going to return functions with the same functionality as your previous letter functions
 * These functions will create the letter based on the input to the outer function
 * const H = letterGenerator(‘H’);
 * const i = letterGenerator(‘i’);
 * console.log(H(i())); // -> ‘Hi’;
 * const Hello = pipe([
 *   letterGenerator(‘H’),
 *   letterGenerator(‘e’),
 *   letterGenerator(‘l’),
 *   letterGenerator(‘l’),
 *   letterGenerator(‘o’),
 * ]);
 * const World = pipe([
 *   letterGenerator(‘W’),
 *   letterGenerator(‘o’),
 *   letterGenerator(‘r’),
 *   letterGenerator(‘l’),
 *   letterGenerator(‘d’),
 * ]);
 * const helloWorld = pipe([
 *   Hello,
 *   letterGenerator(‘,’),
 *   letterGenerator(' ‘),
 *   World,
 *   letterGenerator(‘!’),
 * ]);
 * helloWorld(); // -> ‘Hello, World!’
 */

function letterGenerator(letter) {

}

// OR

// const letterGenerator = (letter) =>;



const objectToExport = {
  H,
  e,
  l,
  o,
  pipe,
  letterGenerator,
};



module.exports = objectToExport;

// ========


// PART 1
const H = letter => letter ? `H${letter}` : 'H';
/*function H(letter) {
  if (letter) {
    return 'H' + letter;
  }
  return 'H';
}*/
// PART 2
// e
const e = letter => letter ? `e${letter}` : 'e';
/*function e(letter) {
  if (letter) {
    return 'e' + letter;
  }
  return 'e';
}*/
// l
const l = letter => letter ? `l${letter}` : 'l';
/*function l(letter) {
  if (letter) {
    return 'l' + letter;
  }
  return 'l';
}*/
// o
const o = letter => letter ? `o${letter}` : 'o';
/*function o(letter) {
  if (letter) {
    return 'o' + letter;
  }
  return 'o';
}*/
// PART 3
//const pipe = (functions) => (startingValue) => functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), startingValue);
// In functional programming you would generally see that written as
//const pipe = (functions) => (x) => functions.reduceRight((v, f) => f(v), x);
function pipe(functions) {
  return function (startingValue) {
    return functions.reduceRight(function (currentValue, currentFunction) {
      return currentFunction(currentValue);
    }, startingValue);
  };
}
const hello = pipe([ H, e, l, l, o]); // -> [function]
console.log(hello());
const ello = pipe([e, l, l, o]); // -> [function]
console.log(ello('J'));
// PART 4
/*
const letterGenerator = letter => letters => letters ? `${letter}${letters}` : letter;
function letterGenerator(letter) {
  return function (letters) {
    if (letters) {
      return letter + letters;
    }
    return letter;
  };
}*/