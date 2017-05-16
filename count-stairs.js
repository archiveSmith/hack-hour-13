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
function countStairs(n) {
  let counter = 0;
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(1);
  }
  (function countWays(array) {
    array.forEach((n, i) => {
      if (n === 1 && array.indexOf(1, i + 1) > 0) {
        counter += 1;
        n += 1;
        newArr = array.slice(0, n).concat(array.slice(n + 1));
        countWays(newArr);
      }
    });
  }(arr));
  return counter;
}
module.exports = countStairs;
