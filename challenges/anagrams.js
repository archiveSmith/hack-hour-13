/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// function anagrams(string) {
//   if (!string) return [''];
//   const array = string.split('');
  
//   function again (letters) {
//     let results = [];
//     if (letters.length <= 1) {
//       return results.concat(letters);
//     }
//     for (let i = 0; i < letters.length; i++) {
//       const front = letters[i];
//       const theRest = letters.slice(0, i).concat(letters.slice(i + 1));
//       results = results.concat(again(theRest).map(str => front + str));
//     }
//     return results;
//   }
//   // //last resort to get rid of duplicates: should be done somehow above
//   // return final = again(array).filter((item, index) => {
//   //   return again(array).indexOf(item) === index;
//   // })
//   return again(array);
// }
// function anagrams (word) {
//     if (word.length < 2) {
//       return [word];
//     } else {
//       var allAnswers = [];
//       for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
//         var shortwordArray = anagrams(shorterWord);
//         for (var j = 0; j < shortwordArray.length; j++) {
//           allAnswers.push(letter + shortwordArray[j]);
//         }
//       }
//     }
//     const noRepeats = allAnswers.reduce((obj, val) => {
//       obj[val] = 0;
//       return obj;
//     }, {});
//     return Object.keys(noRepeats);
//   }

//this takes fewest steps in python tutor
//**this is best version but does not pass test because does not use an array**
// function anagrams(string) {
//   // base case
//   if (string.length <= 1) {
//     return new Set(string);
//   }
    	
//   const shortChars = string.slice(0, -1);
//   const lastChar = string[string.length - 1];

//   // recursive call: get all possible permutations for all chars except last
//   const combosNoLast = anagrams(shortChars);
    
//   // put the last char in all possible positions for each of the above permutations
//   const combos = new Set();
//   combosNoLast.forEach(item => {
//     for (let i = 0; i <= shortChars.length; i++) {
//     	const combo = item.slice(0, i) + lastChar + item.slice(i);
//       combos.add(combo);
//       console.log(combos.size)
//   	}
//   });	
//   return combos;
// }

function anagrams(string) {
  // base case
  if (string.length <= 1) {
    return [string];
  }
    	
  const shortChars = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // recursive call: get all possible permutations for all chars except last
  const combosNoLast = anagrams(shortChars);
    
  // put the last char in all possible positions for each of the above permutations
  const combos = [];
  combosNoLast.forEach(item => {
    for (let i = 0; i <= shortChars.length; i++) {
    	const combo = item.slice(0, i) + lastChar + item.slice(i);
      combos.push(combo);
  	}
  });	

  const noRepeats = combos.reduce((obj, val) => {
    obj[val] = 0;
    return obj;
  }, {});

  return Object.keys(noRepeats);
}
   
module.exports = anagrams;
//console.log(anagrams('jimmy')) 

//'The Set object lets you store UNIQUE values of any type, whether primitive values or object references.' --MDN 
//(It doesn't store duplicates!!!)
