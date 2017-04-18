// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483
'use strict';

function countTwos(num) {
  // only positive ints
  // if less than 2, no 2s
  if (num < 2 || num % 1) return 0;

  // check for num of 2s from 1 to num
  let twoCount = 0;
  for (let i = 2; i <= num; i += 1) {
    // count digits that are 2
    twoCount += i.toString().split('').reduce((numTwos, digit) => numTwos += (digit === '2'), 0);
  }

  return twoCount;
}

console.log(countTwos(1));
console.log(countTwos(3));
console.log(countTwos(13));
console.log(countTwos(1000));
console.log(countTwos(11420));

module.exports = countTwos;