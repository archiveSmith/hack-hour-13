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
    let largest = 0;
    let smallest;
    let profit = 0;
    let stock = stock_prices_yesterday;

    for (let i = 1; i < stock.length; i++) {
        if (stock[i] > largest) {
            largest = stock[i];
        }
        for (let j = i - 1; j < stock.indexOf(largest); j++) {
            let smallest = largest; 
            if (stock[j] < smallest) {
                smallest = stock[j];
            }
            if(largest - smallest > profit) {
            profit = largest - smallest;
              
            }
        }
    }
    return profit;
}

module.exports = bestProfit;
