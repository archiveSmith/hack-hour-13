// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let counter = 0;
  for (let i = 1; i <= num; i += 1) {
    const array = i.toString().split('');
    array.forEach((elem) => {
      if (elem === '2') counter += 1;
    });
  }
  return counter;
}

module.exports = countTwos;