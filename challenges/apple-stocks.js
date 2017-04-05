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

function bestProfit(stock_prices_yesterday) {
  // brute force way
  var maxProfit = 0;
  for (i = 0; i < stock_prices_yesterday.length; i += 1) {
    for (j = i + 1; j < stock_prices_yesterday.length; j += 1) {
      if (stock_prices_yesterday[j] - stock_prices_yesterday[i] > maxProfit) {
        maxProfit = stock_prices_yesterday[j] - stock_prices_yesterday[i];
      }
    }
  }
  return maxProfit;
}

// function bestProfit(stock_prices_yesterday) {
//   // the base amount is stock_prices_yesterday[0] = x;
//   // find the maximum value in the array and get the corresponding index value
//   // find the minimum value in the array, while moving backwards from the time of the max sale, and get the corresponding index value
//   // must find max twice because the absolute max might peak soon after the openning time
//   if (stock_prices_yesterday.length <= 1) {
//     return 0;
//   }

//   var left = stock_prices_yesterday.slice(0, Math.floor(stock_prices_yesterday.length / 2));
//   console.log(left);
//   var right = stock_prices_yesterday.slice(Math.floor(stock_prices_yesterday.length / 2), stock_prices_yesterday.length);
//   console.log(right);

//   var leftBest = bestProfit(left);
//   var rightBest = bestProfit(right);

//   var bestOfBoth = Math.max(rightBest) - Math.min(leftBest);
//   console.log('***'+bestOfBoth);

//   return Math.max(leftBest, rightBest, bestOfBoth);

// }

var stock_prices_yesterday = [1, 4, 8, 3, 2, 6, 4];
console.log(bestProfit(stock_prices_yesterday));
module.exports = bestProfit;
