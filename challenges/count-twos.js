// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let totalTwos = 0;
  for (let i = 1; i <= num; i += 1) {
    if (i.toString().includes('2')) {
      const twosInI = i.toString().split('').reduce((acc, curr) => {
        return curr === '2' ? acc + 1 : acc;
      }, 0);
      totalTwos += twosInI;
    }
  }
  return totalTwos;
}

module.exports = countTwos;
