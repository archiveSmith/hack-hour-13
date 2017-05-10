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
const bookSearch = {};
bookSearch.proper = {};

bookSearch.find = (array, name) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === name) return array[i][1];
  }
  return false;
}

bookSearch.clean = (phonebook) => {

 phonebook = phonebook.sort((a, b) => {
    return (a[0] < b[0]) ? -1 : 1;
  })
  //console.log(phonebook);

  for (let i = 0; i < phonebook.length; i += 1) {
    bookSearch.proper[phonebook[i][0]] = phonebook[i][1];
  }
  return bookSearch.proper;
}

bookSearch.add = (name, number) => {
  if (bookSearch.proper[name]) bookSearch.proper[name] = number;
  else bookSearch.proper[name] = bookSearch.proper[name] = number;
}

bookSearch.remove = (name) => {
  delete bookSearch.proper[name];
}

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

// console.log(bookSearch.clean(jazbook));

module.exports = objectToExport;