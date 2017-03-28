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
  console.log('                ', stock_prices_yesterday);
  let maxProfit = 0;
  let lowest;

  if (stock_prices_yesterday.constructor === Array) {
    for (let time = 0; time < stock_prices_yesterday.length; time += 1) {
      if (lowest === undefined || lowest > stock_prices_yesterday[time]) {
        lowest = stock_prices_yesterday[time];
      } else if (lowest < stock_prices_yesterday[time]) {
        let newProfit = stock_prices_yesterday[time] - lowest;
        if (maxProfit < newProfit) {
          maxProfit = newProfit;
        }
      }
    }
  }
  return maxProfit;
}

// var stock1 = [200, 100, 300, 1000, 50]; // 900
// var stock2 = [10, 20, 5, 0, 200, 500]; // 500
// var stock3 = [30, 50, 20, 10, 400, 20]; // 390
// var stock4 = [1000, 20, 20, 20, 20]; // 0
// var stock5 = {}; // 0

// console.log(bestProfit(stock1));
// console.log(bestProfit(stock2));
// console.log(bestProfit(stock3));
// console.log(bestProfit(stock4));
// console.log(bestProfit(stock5));

// module.exports = bestProfit;
