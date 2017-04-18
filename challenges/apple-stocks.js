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
  if (stock_prices_yesterday.length === 0) return 0;

  let invalidInput = false;
  let max = -Infinity;
  let result = -Infinity;
  //create array that stores greatest beyond that point
  const peakPastTime = [];
  for (i = stock_prices_yesterday.length - 1; i >= 0; i -= 1) {
    if (stock_prices_yesterday[i] > max) max = stock_prices_yesterday[i];
    peakPastTime.unshift(max);
  }

  if (invalidInput) return 0;
  //create array that stores largest prof if bought at that time
  const highestProf = peakPastTime.map((peak, ind) => peak - stock_prices_yesterday[ind]);
  //find max of that array
  highestProf.forEach(prof => {
    if (prof > result) result = prof;
  });

  return result > 0 ? result : 0;
}

module.exports = bestProfit;
