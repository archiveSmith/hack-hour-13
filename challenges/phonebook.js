<<<<<<< HEAD
// done, good to review

=======
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
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
<<<<<<< HEAD
=======

>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
<<<<<<< HEAD
  //sort the phonebook
  jazbook.sort((a, b) => {
    a[0] > b[0];
  });

  // start search from the middle
  let mid = Math.floor(jazbook.length / 2);

  // fail if missdle element is nonexistant
  if (jazbook[mid] === undefined) return false;

  // return number if we have found correct name
  if (jazbook[mid][0] === name) return jazbook[mid][1];

  return jazbook[mid][0] > name
    ? findName(jazbook.slice(0, mid), name)
    : findName(jazbook.slice(mid + 1), name);
}

function PhoneBook(jazbook) {
  this.book = {};
  jazbook.forEach(record => this.book[record][0] = record[1]);
}

Phonebook.prototype.add = function(name, number) {
  this.book[name] = number;
};

Phonebook.prototype.lookup = function(name) {
  return this.book[name];
};
Phonebook.prototype.delete = function(name) {
  let record = this.book[name];
  delete this.book[name];
  return record;
};

jazbook = [
  ["alex", "301-844-3421"],
  ["jae", "301-844-1211"],
  ["david", "301-844-0978"],
  ["travis", "301-844-8505"],
  ["jasmine", "1800-974-4539"]
];

let book = new Phonebook();

const objectToExport = {
  findName,
  makePhoneBookObject
=======

}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

}

const objectToExport = {
  findName,
  makePhoneBookObject,
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
};

module.exports = objectToExport;
