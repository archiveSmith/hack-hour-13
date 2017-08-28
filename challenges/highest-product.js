	/**
	 * Given an array of integers, find the highest product you can get from three of the integers.
	 */

	// function highestProduct(array) {
	// 	if(array.length < 3) return 0;
	// 	let max = array[0] * array[1] * array[2];
	// 	let list =[], current;
	// 	for(let i = 0; i < array.length-2; i++){
	// 		for(let next = i+1; next < array.length -1; next++){
	// 			list.push(array[i], array[next], array[next+1]);
	// 			current = list.reduce((acum, next) => acum * next);
	// 			if(current > max){
	// 				max = current;
	// 			}
	// 			list=[];
	// 		}
	// 	}
	// 	return max;
	// }
	function highestProduct(array) {
	/*
	first if check edge cases, if the array has less then 3 elements, send a message
	Now, sort the array and then return the product of the last 3 elements
	let's not mutate the current array
	*/
	if(array.length < 3) return 0;
	let myArr = array.slice(0);
	myArr.sort((a,b) => a - b);
	return myArr[myArr.length - 1] * myArr[myArr.length - 2] * myArr[myArr.length - 3]
	
}


	module.exports = highestProduct;
