// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  if (typeof num !== 'number') {
    return false;
  }

  let numOfTwos = 0;

  for (let i = 1; i <= num; i += 1) {
    const numbified = i.toString();
    for (let j = 0; j < numbified.length; j += 1) {
      if (numbified.charAt(j) === '2') {
        numOfTwos += 1;
      }
    }
  }

  return numOfTwos;
}

// reg-ex solution
// function countTwos(num) {
//   let count = 0;

//   for (let i = 2; i <= num; i += 1) {
//     i.toString().replace(/2/g, function() {
//       count += 1;
//     })
//   }

//   return count;
// }

// recursive solution
// function countTwos(num, counter = 0) {
//   if (num === 0) return counter;
//   return countTwos(num - 1, counter += num.toString().split('').filter(digit => digit === '2').length) // missing something
// }

// console.log(countTwos(11420));  //-> 300

module.exports = countTwos;