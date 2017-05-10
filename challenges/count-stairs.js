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
  if (!Number.isInteger(n)) {
    return false;
  }
  
  let count = 0;

  function stairs(n, decrement) {
    if (n <= 0) {
      if (n === 0) {
        count += 1;
      }
      return
    }
    const otherNum = decrement === 1 ? 2 : 1;
    stairs(n - decrement, decrement) || stairs(n - otherNum, otherNum);
  }

  stairs(n, 1);
  
  return count;
}

// countStairs(5);

module.exports = countStairs