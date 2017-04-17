// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
  var count = 0;
  if (num < 2) return 0;
  for (var i = 2; i <= num; i++) {
    var numAsString = i.toString();
    for (var j = 0; j < numAsString.length; j++) {
      if (numAsString[j] === "2") {
        count++;
      }
    }
  }
  return count;
}

// console.log(countTwos(1));

module.exports = countTwos;
