
// Write a function that returns an array containing the ibers 1 to i. Put "fizz" in place of ibers divisble by 3, "buzz" in place of ibers divisble by 5, and "fizzbuzz" in place of ibers divisble by both 3 and 5
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
  var array = [];
  for (i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      array.push('fizzbuzz'); 
    } else if (i % 5 === 0) {
      array.push('buzz')
    } else if (i % 3 === 0) {
      array.push('fizz')
    } else {
      array.push(i);
    }
  }  
  return array; 
}

//INPUT: 1 - num; 
//OUTPUT: ARRAY


module.exports = fizzbuzz;
