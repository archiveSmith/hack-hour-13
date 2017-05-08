// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
let swapped = true;
	while (swapped === true) {
		swapped = false;
		for (let curr = 0; curr < array.length - 1; curr++) {
			let next = curr + 1;
			if (array[curr] > array[next]) {
				swapped = true;
				[array[curr],array[next]] = [array[next], array[curr]];
			}
		}
	}
	return array;
}

module.exports = bubbleSort;
