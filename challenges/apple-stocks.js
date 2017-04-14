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
    let stocks = stock_prices_yesterday;
    let largest = stocks[1];
    let smallest;
    let profit = 0;

    for (let i = 1; i < stocks.length; i++) {
        if (stocks[i] > largest) {
            largest = stocks[i];
        }
    }
    smallest = largest;
    for (let j = 0; j < stocks.indexOf(largest); j++) {
      if (stocks[j] < smallest) {
        smallest = stocks[j];
        console.log(smallest);
      }
    }
    profit = largest - smallest;
    return profit;
}

module.exports = bestProfit;
