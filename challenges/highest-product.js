/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	// if the array is less then 3 then return empty array or message
	// then loop with two nested loops and.start max at 0 and then comopare to product
	if(array.length < 3) return 'You need at least 3 integers';
	let max = 0;
	let list =[], current;
	for(let i = 0; i < array.length-2; i++){
		for(let next = i+1; next < array.length -1; next++){
			list.push(array[i], array[next], array[next+1]);
			current = list.reduce((acum, next) => acum * next);
			if(current > max){
				max = current;
			}
			list=[];
		}
	}
	return max;
}


module.exports = highestProduct;
