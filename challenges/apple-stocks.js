/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(prices) {
  if (!Array.isArray(prices)) {return 0}
  let highest = Math.max(...prices)
  if (prices.slice(1).indexOf(highest) === -1) {return 0}  //no profit possible

  let lastIndexOfHighest = prices.lastIndexOf(highest);
  let lowestBeforeHighest = Infinity;
  for (let i = 0; i < lastIndexOfHighest; i +=1) {
    if (prices[i] < lowestBeforeHighest) {
      lowestBeforeHighest = prices[i];
    }
  }
  return highest - lowestBeforeHighest
}

var prices1 = [120, 109, 111, 100, 99, 104, 120, 88, 45];
var prices1a = [100, 109, 111, 100, 99, 104, 120, 88, 45, 120];
var prices2 = [101, 99, 98, 93, 100];
var prices3 = 'this is not an array';


//====================TESTING===============================================================
console.log( 'PRICES1', bestProfit(prices1) );
console.log( 'PRICES1a', bestProfit(prices1a) );
console.log( 'PRICES2', bestProfit(prices2) );
console.log( 'PRICES3', bestProfit(prices3) );

/*
INPUT: ARRAY OF STOCK PRICES 
OUTPUT: NUMBER: BEST PROFIT 
------------------------------
time in minutes past 9:30am = stock prices in dollars
find best profit for 1 purchase and sale of stock 
--------------------------
find highest number and look backwards to find lowest number that came before it 
subtract those two
if (highest number is at index 0 and it's not repeated in the array) {no profit possible, return 0}
---------------------------
find index of highest
loop thru all numbers until highest index and keep track of which one is smallest
subtract highest from smallest 
*/


function bestProfit2(prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
}







module.exports = bestProfit;
