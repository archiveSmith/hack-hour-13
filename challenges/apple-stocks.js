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
  if (!Array.isArray(stock_prices_yesterday)) return 0;

  let lowest;
  let maxProfit = 0; //final value placeholder
  let current; //tracks current stock price
  let length = stock_prices_yesterday.length; //length of the array

  for (let i = 0; i < length; i += 1) {
    if (lowest === undefined || lowest > stock_prices_yesterday[i]) {
      lowest = stock_prices_yesterday[i];
    }
    else {
      current = stock_prices_yesterday[i] - lowest;
      if (maxProfit < current) {
        maxProfit = current;
      }
    }
  }
  return maxProfit;
}

//original double looped solution before refactoring

// function bestProfit(stock_prices_yesterday) {
//     if (!Array.isArray(stock_prices_yesterday)) return 0;

//     let currentProfit;
//     let purchase;   //tracks purchase price
//     let maxProfit = 0; //final value placeholder
//     let current; //tracks current stock price
//     let length = stock_prices_yesterday.length; //length of the array

//     for (let i = 0; i < length; i+= 1) {
//         for (let j = 1; j < length; j+= 1) {
//             purchase = stock_prices_yesterday[i];
//             current = stock_prices_yesterday[j];

//             if (current > purchase) {
//                 currentProfit = current - purchase;
//                 if (currentProfit > maxProfit) {
//                     maxProfit = currentProfit;
//                 }
//             }
//         }
//     }
//     return maxProfit;
// }

module.exports = bestProfit;
