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
   if (stock_prices_yesterday.length <= 1) return 0;

   const prices = stock_prices_yesterday;
   let diff = 0;

   for (let i = 0; i < prices.length - 1; i += 1) {
     for (let j = 1; j < prices.length; j += 1) {
       if (prices[j] - prices[i] > diff && prices[j] - prices[i] > 0) {
         diff = prices[j] - prices[i];
       }
     }
   }

   if (diff <= 0) return 0;
   return diff;
 }

module.exports = bestProfit;
