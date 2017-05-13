<<<<<<< HEAD
// Done but i don't get it

=======
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */
<<<<<<< HEAD
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// function countStairs(s) {
//   return fib(s + 1);
// }

function countStairs(n) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  return countStairs(n - 1) + countStairs(n - 2);
}
console.log(countStairs(5));
module.exports = countStairs;

// http://www.geeksforgeeks.org/count-ways-reach-nth-stair/
=======

function countStairs(n) {

}

module.exports = countStairs;
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
