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

class stockDiffObj {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
}

function bestProfit(stock_prices_yesterday) {
  if (stock_prices_yesterday === undefined || !Array.isArray(stock_prices_yesterday || stock_prices_yesterday.length === 0)) {
    return 0;
  }
  let stockDiffArr = [new stockDiffObj(stock_prices_yesterday[0], stock_prices_yesterday[0])];
  for (let i = 1; i < stock_prices_yesterday.length; i += 1) {
    if (stock_prices_yesterday[i] > stockDiffArr[stockDiffArr.length - 1].max) {
      stockDiffArr[stockDiffArr.length - 1].max = stock_prices_yesterday[i]
    }
    if (stock_prices_yesterday[i] < stockDiffArr[stockDiffArr.length - 1].min) {
      stockDiffArr.push(new stockDiffObj(stock_prices_yesterday[i], stock_prices_yesterday[i]))
    } 
  }

  const profitObj = stockDiffArr.reduce((prev, curr) => {
    if (curr.max - curr.min > prev.max - prev.min) return curr
    else return prev
  });
  
  return (profitObj.max - profitObj.min);
}

module.exports = bestProfit;
