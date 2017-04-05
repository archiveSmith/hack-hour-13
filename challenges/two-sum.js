/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, target) {
	if(arr.length < 2)  return false;
	var sum=0;
	for(var i = 0; i < arr.length - 1; i += 1){
		for(var j=i+1; j<arr.length; j += 1){
			if(arr[i] + arr[j] === target)
			return true
		}	
	}
	return false;
}

module.exports = twoSum;
