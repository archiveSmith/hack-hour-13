// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(n) {
	var twoCount = 0;
	var tempCount;
	var str;
	for(let i=1; i<=n; i += 1){
		str = JSON.stringify(i);
		if(str.includes('2')){
			twoCount += str.match(/2/gi).length;
		}
	}
	return twoCount;
}

module.exports = countTwos;


let result = countTwos(1000);  //-> 0
console.log('the result is ,', result);
// countTwos(3); // -> 1
// countTwos(13); // -> 2
// countTwos(1000); // -> 300
