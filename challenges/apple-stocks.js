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

  //  if (stock_prices_yesterday.length === 0) {
  //    return 0;
  //  }
  //  // store best profit you can make
  //  var best = 0;
  //  // iterate through stock_prices_yesterday and find the best one
  //  for (var i=0; i <= stock_prices_yesterday.length - 1; i++){
  //    for (var j=i+1; j <= stock_prices_yesterday.length - 1; j++) {
  //      var div = stock_prices_yesterday[j] - stock_prices_yesterday[i];
  //      best = Math.max(best, div);
  //    }
  //  }
  //  return best;
  function bestProfit(stock_prices_yesterday) {
  // if stock_prices_yesterday is empty return 0
  if (stock_prices_yesterday.length === 0) {
    return 0;
  }
  // declare cheapest and best profit
  var cheapest = stock_prices_yesterday[0];
  var profit = 0;

  for (var i=0; i <= stock_prices_yesterday.length - 1; i++){
    cheapest = Math.min(cheapest, stock_prices_yesterday[i]);
    var div = stock_prices_yesterday[i] - cheapest;
    profit = Math.max(profit, div);
  }
  return profit;
}



module.exports = bestProfit;
