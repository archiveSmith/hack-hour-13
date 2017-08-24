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
 *
 * ################################################################################################
 *
 *  Input:
 *    - Array of stock prices
 *
 *  Output:
 *    - Best profit possible from 1 purchase and 1 sale of 1 Apple stock
 *
 *  Edge Cases:
 *    - Input not an array or empty array, return 0.
 *
 */

 /* ##### First Solution #####
     Handle edge cases
       - Input not an array or empty array, return 0.
      Declare a variable best and initialize it to 0 (use this to store the best profit).
      Iterate through input stock prices (outer for loop)
        - Initialize i at 0, increment i by 1 each iteration
      Iterate through input stock prices (inner for loop)
        - Initialize j at 1, increment j by 1 each iteration
        - Each iteration set best eqaul to the max between:
          - best
          - stock_prices_yesterday[i] - stock_prices_yesterday[j]
      Return best

      [1, 6, 15, 4, 9, 3, 22]
 */
 // function bestProfit(prices) {
 //   if (!Array.isArray(prices) || !prices.length) return 0;
 //
 //   let best = 0;
 //
 //   for (let i = 0; i < prices.length; i++) {
 //     for (let j = 1; j < prices.length; j++) {
 //       best = Math.max(best, prices[j] - prices[i]);
 //     }
 //   }
 //   return best;
 // }

 /* ##### Better Solution #####
    Handle edge cases
      - Input not an array or empty array, return 0.
    Use first price to initialize lowest price to buy.
    Initialize highest profit as 0.
    Iterate through input array.
      - If we see a price lower than our lowest price so far, set our lowest price
      so far to that lowest price.
      - Set profit to highest between itself and newest price minus lowest price.
    Return profit value at the end.
 */

 function bestProfit(prices) {
   if (!Array.isArray(prices) || !prices.length) return 0;

   let buy = prices[0];
   let profit = 0;

   for (let i = 0; i < prices.length; i++) {
     buy = Math.min(buy, prices[i]);
     profit = Math.max(profit, prices[i] - buy);
   }
   return profit;
 }

 // console.log(bestProfit([1, 6, 15, 4, 9, 3, 22]));

module.exports = bestProfit;
