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

<<<<<<< HEAD
function findName(jazbook, name) {
  // check that jazbook is an array
  if (jazbook.constructor === Array && typeof name === 'string') {
    for (let i = 0; i < jazbook.length; i += 1) {
      // makes sure that each name and phone number is an array
      if (jazbook[i].constructor !== Array) break;
      if (jazbook[i][0] === name) return jazbook[i][1];
    }
  }
  return false;
}

function makePhoneBookObject(jazbook) {
  this.phonebook = jazbook.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {})
}

makePhoneBookObject.prototype.add = (name, phonenumber) => {
  this.phonebook[name] = phonenumber;
}

makePhoneBookObject.prototype.lookup = (name) => {
  return this.phonebook[name];
}

makePhoneBookObject.prototype.remove = (name) => {
  const deleted = this.phonebook[name];
  delete this.phonebook[name];
  return deleted;
}

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539']
];

console.log(findName(jazbook, 'travis'))

module.exports = {
=======
//  return the number associated with the name in the jazbook
function findName(jazbook, name) {

}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

}

const objectToExport = {
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
  findName,
  makePhoneBookObject,
};

<<<<<<< HEAD
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

//  return the number associated with the name in the jazbook
// function findName(jazbook, name) {
//   if(!Array.isArray(jazbook) || !jazbook.length || typeof name !== 'string') return false;

//   for (let i = 0; i < jazbook.length; i += 1) {
//     if (jazbook[i][0] === name) return jazbook[i][1];
//   }
//   return false;
// }

// // return an object literal representing the jazbook
// function makePhoneBookObject(jazbook) {
//   return jazbook.reduce((jazbookObj, subarray) => {
//     jazbookObj[subarray[0]] = subarray[1];
//     return jazbookObj;
//   }, {});
// }

// const objectToExport = {
//   findName,
//   makePhoneBookObject,
// };

// module.exports = objectToExport;
=======
module.exports = objectToExport;
>>>>>>> af4457979a6e36e8dae56be83dd063a624266d5f
