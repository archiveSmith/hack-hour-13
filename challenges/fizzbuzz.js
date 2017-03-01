// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  if (num < 0 || num === undefined || num === null || isNaN(num)) return false;

  const output = [];
  if (num === 0) output.push('fizzbuzz');

  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('fizzbuzz')
    } else if (i % 3 === 0) {
      output.push('fizz')
    } else if (i % 5 === 0) {
      output.push('buzz');
    } else {
      output.push(i);
    }
  }
  return output;
}

// Test Cases
// fizzbuzz(0);
// fizzbuzz(16);
// fizzbuzz(null);
// fizzbuzz('hello');
// fizzbuzz('{}');
// fizzbuzz(undefined);

module.exports = fizzbuzz;
