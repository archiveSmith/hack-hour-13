// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let string = '';
  for (let i = 1; i <= num; i += 1) {
    string += i;
  }
  return string.split('').filter(num => num === '2').length;
}

//////////////////////////TESTING////////////////////////
console.log( countTwos(13), 'should equal 2' )
console.log( countTwos(11420), 'should equal 4483' )
console.log( countTwos(1000), 'should equal 300' )

/*
write all numbers in a string, split string by each number, filter for 2, length,
odd numbers will also have a 2 
*/

module.exports = countTwos;