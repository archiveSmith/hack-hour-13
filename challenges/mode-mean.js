/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	var counter={};
	var mean = array.reduce(function(current, next){
		return current+next;
	});
	mean = Math.floor(mean/array.length);
	var mode=0;
	array.sort(function(a, b){return b-a;});
	var max=0;
	for(let i=0; i<array.length; i++){
		if(!(array[i] in counter)){
			counter[array[i]]=1;
		}
		else{
			counter[array[i]]++;
		}
	}
	var counters=[];
	for(let k in counter){
		counters.push(counter[k]);
	}
	max = Math.max.apply(null,counters)
	
	final =[];
	for (let a in counter){
		if(counter[a] === max){
			final.push(parseInt(a));
		}
	}
	mode =  Math.max.apply(null, final);
	return Math.max(mode, mean);
}

module.exports = modemean;
