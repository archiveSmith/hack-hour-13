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

// const jazbook = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];
//
// const name = 'travis';
//
function Jazbook(array) {
  this.phoneBook = {};

  for (let i = 0; i < array.length; i += 1) {
    this.phoneBook[array[i][0]] = this.phoneBook[array[i][1]];
  }
}

JazBook.prototype.add = function(name, number) {
  this.phoneBook[name] = number;
}

JazBook.prototype.lookup = function(name) {
  return this.phoneBook[name];
}

JazBook.prototype.remove = function(name) {
  delete this.phoneBook[name];
}
module.exports = objectToExport;
