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
function countStairs(n, cache = {}) {
  // base case: when 0 steps, return 1
  if (n === 0) return 1;
  // when negative, means overstepping last step, so return 0 since invalid
  else if (n < 0) return 0;
  // pull from cache to avoid redundant work
  else if (cache[n]) return cache[n];

  // two choices to take: 1 or 2 steps
  // so need to check total possible combinations after those two cases happen
  const result = countStairs(n-1, cache) + countStairs(n-2, cache);
  // cache result
  cache[n] = result;
  
  return result;
}

module.exports = countStairs;