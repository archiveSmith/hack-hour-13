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


//coin-sum, subset-sum are similar problems
//-------------------------------
function countStairs(n) {
  //return 1 so add to result of number of possibilities 
  if (n === 0) return 1;
  //went past so don't add anything
  if (n < 0) return 0;
  return countStairs(n - 1) + countStairs(n - 2)
}

/////////////////////////////////////
console.log( countStairs(5), 'should equal 8');


/*
Tree structure: 
              N 
       n-1         n-2
    n-1  n-2    n-1  n-2

when find zero, you've found a way to climb stairs, do this recursively
*/

module.exports = countStairs;