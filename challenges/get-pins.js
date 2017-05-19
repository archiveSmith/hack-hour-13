/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it. The keypad has the following layout:
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations. * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 

But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!
expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}
*/

function getPINs1(observed) {
  let arrays = [];
  observed.split('').forEach(n => {
    if (+n === 0) {arrays.push(["8"])}
    if (+n === 1) {arrays.push(["1","2","4"])}
    if (+n === 2) {arrays.push(["1","2","3","5"])}
    if (+n === 3) {arrays.push(["2","3","6"])}
    if (+n === 4) {arrays.push(["1","4","5","7"])}
    if (+n === 5) {arrays.push([])}
  })
  let result = [];
  while (arrays.length > 1) {
    for (let i = 0; i < arrays[0].length; i += 1) {
      for (let j = 0; j < arrays[1].length; j += 1) {
        result.push(arrays[0][i] + arrays[1][j])
      }
    }
    arrays = arrays.slice(2); 
    arrays.push(result);
  }
  // return arrays;
  return result;
}
//--------------new after lecture-----------------------
function getPINs2(observed) {
  const adj = {
    0: ['8', '0'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9']
  }
  let result = [];
  while (observed.length > 1) {
    for (let i = 0; i < arrays[0].length; i += 1) {
      for (let j = 0; j < arrays[1].length; j += 1) {
        result.push(arrays[0][i] + arrays[1][j])
      }
    }
    arrays = arrays.slice(2); 
    arrays.push(result);
  }
  // return arrays;
  return result;

}


//----------------------CODESMITH----------------------

function getPINs3(observed) {
  const adj = {
    0: ['8', '0'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9']
  }
  
  // If there is only one observed digit, return array of possibilities from the object above.
  if (observed.length === 1) return adj[observed]

  // Get the remaining possibilities from remaining digits.
  const theRest = getPINs(observed.slice(1))

  // Place each possible digit from current observed digit and place it front of every possibility from
  // above array of possibilities (based on remaining observed digits). Return big array of possibilities.
  return adj[observed[0]].reduce((accum, num) => [...accum, ...theRest.map(pins => num.concat(pins))], [])
}


//------------CHRIS' WAY ONLY PARTIAL SOLUTION-----------------------------------------------

//adjacents is an object with what numbers to use (if statement from above); 

function getPINs4(observed) {
  const adjacents = {
    0: ['8', '0'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9']
  }

  function getCombos(observed) {
    if (observed.length <= 1) {
      return adjacents[observed];
    }
  
    const remaining = getCombos(observed.slice(1)); 
    let combos = [];
    for (let i = 0; i < adjacents[observed[0]].length; i += 1) {
      for (let j = 0; j < remaining.length; j += 1) {
        combos.push(adjacents[observed[0][i]].concat(remaining[j]));
      }
    }
    return combos;
  }
  return getCombos(observed)
}

//////////////////////////TESTING///////////////////////////////////////////
console.log(getPINs4('111'))


/*
transform each digit into an array of possibilities
make array of arrays if more than one digit;
if just one array return it; 
if 2; reduce first two arrays into one; 
if 2+; reduce first two and then keep reducing until none left
recursion?
//----------------------------

2 combinations(b/c order doesn't matter): 1 for each digit possibilities, one for each combo of digits together

1 letter: if statements
repeat 1 letter process for rest of observed ->  find combinations

reduce two arrays and make one array with combinations 
//---------------

*/

///////////////////////////////////////////////////////////////
module.exports = getPINs