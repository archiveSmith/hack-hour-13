// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

const cache = {
  0: 0
};

function countTwos(num) {
  if (cache[num] !== undefined) return cache[num];
  return cache[num] = countTwos(num - 1) + num.toString().split('').reduce((count, curr) => curr === '2' ? count + 1 : count, 0);
}

module.exports = countTwos;
