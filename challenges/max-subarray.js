/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
	if(arr.length === 1) return arr[0];
	let finalSum = Math.min.apply(null,arr);
	let currentSum;
	let subArray = [];
	for(let i=0; i<arr.length-1; i+=1){
		subArray.push(arr[i]);
		for(let j=i+1; j<arr.length; j+=1){
			subArray.push(arr[j]);
			currentSum = subArray.reduce((acum, next) => acum + next);
			if(currentSum > finalSum){
				finalSum = currentSum;
			}
		}
		subArray=[];
	}
	return finalSum;
}

// or
function maxSubarrayB(arr) {
	/*
	set the maxSum to the min number in the array
	do a nested loop to find all possible combinations of subarrays
	while doing this, add the current subarray
			check if current sum is greater than the maxSum, if so, set the maxSum to currentSum
	*/
	let maxSum = Math.min.apply(null, arr);
	for(let i=0; i<arr.length; i++) {
			let tempSubArray = [arr[i]];
			let currentSum = 0;
			for(let j=i+1; j<arr.length; j++) {
					tempSubArray.push(arr[j]);
					currentSum  = tempSubArray.reduce((acum, next) => acum + next);
					if(currentSum > maxSum) maxSum = currentSum; 
			}
	}
	return maxSum;
}

let result =  maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]);// -> 18 from [3, 10, -4, 7, 2]
console.log('the result,', result);

let result2 = maxSubarray([15,20,-5,10]);//  -> 40
console.log('the next result, ', result2);

let result3 = maxSubarray([-2, -3]);//  -> -3
console.log('the third result, ', result3);

module.exports = maxSubarray;
