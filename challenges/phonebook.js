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


// part 1
// O(n)
const badSearch = (array, name) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][0] === name) return array[i][1]
  }
  return false;
}

const search = {}
search.phonebook = {}
search.add = (name, phone) => search.phonebook[name] = phone
search.remove = (name) => delete search.phonebook[name]
search.findName = (name) => (search.phonebook[name])
search.makePhoneBookObject = (book) => {
  for (let i = 0; i < book.length; i += 1) {
    // console.log(book[i]);
    search.phonebook[book[i][0]] = book[i][1]; 
  }
}

// const jazbook = [
//      ['alex','301-844-3421'],
//      ['jae','301-844-1211'],
//      ['david','301-844-0978'],
//      ['travis','301-844-8505'],
//      ['jasmine','1800-974-4539'],
//    ];

// search.makePhoneBookObject(jazbook);
// search.findName('alex');
// search.add('jo', 'kim');
// search.remove('david');
// console.log(search.phonebook);

module.exports = search;

// //  return the number associated with the name in the jazbook
// function findName(jazbook, name) {

// }

// // return an object literal representing the jazbook
// function makePhoneBookObject(jazbook){

// }

// const objectToExport = {
//   findName,
//   makePhoneBookObject,
// };

// module.exports = objectToExport;

