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
'use strict';

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday) || !stock_prices_yesterday.length) {
    return 0;
  }

  // get array of stock price indices, by order of price
  const indicesByPrice = Object.keys(stock_prices_yesterday)
    .map(index => +index) // convert key strings to nums
    .sort((a, b) => {
      return stock_prices_yesterday[a] - stock_prices_yesterday[b];
    });

  // check from high and low ends
  let beg = 0, end = stock_prices_yesterday.length - 1;

  return (function checkHighAndLowPrices (low, high) {
    // base case
    if (low >= high) return 0;
    
    let lowInd = indicesByPrice[low],
        highInd = indicesByPrice[high];
    
    // check if low price's index lower than high price's index
    if (lowInd < highInd) {
      const lowPrice = stock_prices_yesterday[lowInd],
            highPrice = stock_prices_yesterday[highInd];
      return highPrice - lowPrice;
    } else {
      return Math.max(
        checkHighAndLowPrices(low + 1, high),
        checkHighAndLowPrices(low, high - 1)
      );
    }
  })(beg, end);
}

// const prices = [78,62,2,60,23,39,78,66,39,18,56,86,48,96,71];
const prices = [50, 55, 2];
// const prices = [2,50];
var res = bestProfit(prices);
console.log(res);

module.exports = bestProfit;
