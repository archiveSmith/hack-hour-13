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

function bestProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length === 1 || !Array.isArray(stockPricesYesterday)) return 0;

  const maxStockPrice = Math.max(...stockPricesYesterday);
  const maxStockTime = stockPricesYesterday.indexOf(maxStockPrice);

  const minStockPrice = Math.min(...stockPricesYesterday);
  const minStockTime = stockPricesYesterday.indexOf(minStockPrice);

  if (maxStockTime < minStockTime) {
    stockPricesYesterday.splice(maxStockTime, 1);
    return bestProfit(stockPricesYesterday);
  }

  const maxReturnOnStock = (maxStockPrice - minStockPrice).toFixed(2);

  return maxReturnOnStock;
}

module.exports = bestProfit;
