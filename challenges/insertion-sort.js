// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	var j;
	let temp;
	for(let i=1; i<array.length; i +=1){
		j=i;
		while(j>0 && array[j-1] > array[j]){
			temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			j = j-1;
		}
	}
	return array;
}

module.exports = insertionSort;