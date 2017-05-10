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
let routes = 0;

  const recursion = (n, routes) => {
    // console.log(routes, 'routes');
    if (n === 0) return 1;
    if (n === 1) return 1;
      routes++;
      return recursion (n - 1, routes) + recursion(n - 2, routes);
  }
  return recursion(n, routes);
}

// console.log(countStairs(6));
module.exports = countStairs;