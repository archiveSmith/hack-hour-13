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
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length === 0) return 0;

  if (Math.max(...stock_prices_yesterday) === stock_prices_yesterday[0]) return 0;

  if (Math.max(...stock_prices_yesterday) === Math.min(...stock_prices_yesterday)) return 0;

  if (stock_prices_yesterday.indexOf(Math.max(...stock_prices_yesterday)) > stock_prices_yesterday.indexOf(Math.min(...stock_prices_yesterday))) return Math.max(...stock_prices_yesterday) - Math.min(...stock_prices_yesterday);

  if (Math.max(...stock_prices_yesterday) - stock_prices_yesterday[0] > stock_prices_yesterday[stock_prices_yesterday.length - 1] - Math.min(...stock_prices_yesterday)) return Math.max(...stock_prices_yesterday) - stock_prices_yesterday[0];
  else return stock_prices_yesterday[stock_prices_yesterday.length - 1] - Math.min(...stock_prices_yesterday);
}

module.exports = bestProfit;
