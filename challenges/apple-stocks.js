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

function bestProfit(arr) {
//asssuming that the collection of stock prices does not have undefined elements. This would mean that each minute the stock will have a value;
if(!arr) return 0;	
var profitList=[];
	for(var i=0; i<arr.length; i++){
		for(var g=i+1; g<arr.length; g++){
			if(arr[i]<arr[g]){
				profitList.push(arr[g]-arr[i]);
			}
		}
	}
	if(profitList.length === 0) return 0;
	return Math.max.apply(Math, profitList);
}

module.exports = bestProfit;

/*


*/

