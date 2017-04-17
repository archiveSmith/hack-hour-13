// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let counter = twoCounter = 0;
  while (counter <= num) {
    counter.toString().split('').forEach(e => { if (e === '2') twoCounter++; });
    counter++;
  }
  return twoCounter;
}

//TEST
let testArr = [1, 3, 13, 1000, 11420];
testArr.forEach(e => {
  console.log(countTwos(e));
})

module.exports = countTwos;