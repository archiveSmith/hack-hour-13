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

>>>>>>> 8f3a9ffd16961f6aca0af64381152a7a23988fc2
* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
<<<<<<< HEAD
  if(!Array.isArray(jazbook) || !jazbook.length || typeof name !== 'string') return false;

  for (let i = 0; i < jazbook.length; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  return jazbook.reduce((jazbookObj, subarray) => {
    jazbookObj[subarray[0]] = subarray[1];
    return jazbookObj;
  }, {});
=======

}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

>>>>>>> 8f3a9ffd16961f6aca0af64381152a7a23988fc2
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

<<<<<<< HEAD
module.exports = objectToExport;
=======
module.exports = objectToExport;
>>>>>>> 8f3a9ffd16961f6aca0af64381152a7a23988fc2
