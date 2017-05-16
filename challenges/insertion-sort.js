// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  return array.reduce((sorted, num) => {
    // initialize array
    if (!sorted.length) {
      sorted.push(num);
    } else {
      // iterate thru sorted and splice in num
      for (let i = 0; i <= sorted.length; i++) {
        const lowerBound = (sorted[i - 1] !== undefined) ? sorted[i - 1] : -Infinity,
          upperBound = (sorted[i] !== undefined) ? sorted[i] : Infinity;
        if (num >= lowerBound && num <= upperBound) {
          sorted.splice(i, 0, num);
          break;
        }
      }
    }
    return sorted;
  }, []);
}

module.exports = insertionSort;