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

  let arr = stock_prices_yesterday;
  
  let min = arr[0];
  let max = arr[0];
  let curPercentIncrease = 0;
  let maxPercentIncrease = 0;

  // if price drops: (1) determine new min, (2) go to next index
  // if price increases: (1) determine current max, (2) determine percentIncrease by dividing current max by current min
  // determine maxPercentIncrease

  arr.forEach((price) => {
    if (price < min) {
      min = price;
    }
    if (price >= max) {
      max = price;
      curPercentIncrease = max / min;
      if (curPercentIncrease > maxPercentIncrease) {
        maxPercentIncrease = curPercentIncrease;
        max = 0;
      }
    }
  });
  if (maxPercentIncrease <= 1) {
    return 0;
  }
  return maxPercentIncrease;
}

// bestProfit([100, 40, 60, 95, 110, 20, 105]);

module.exports = bestProfit;
