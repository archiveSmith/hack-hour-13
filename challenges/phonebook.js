/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?
* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/

function findName(arr, name) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][0] === name) return arr[i][1];
  }
  return false;
}

const jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

// return an object literal representing the jazbook
function sort(arr) {
  return arr.sort((a, b) => b[0] < a[0]);
}

function mergeSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const rightArr = arr.slice(0, mid);
  const leftArr = arr.slice(mid);
  return sort(mergeSort(leftArr).concat(mergeSort(rightArr)));
}

function makePhoneBookObject(arr) {
  const newArr = mergeSort(arr);
  return newArr.reduce((acc, curr) => { acc[curr[0]] = curr[1]; return acc; }, {});
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
