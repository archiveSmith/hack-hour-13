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

//---------CODESMITH SOLUTION---------------------------
//  return the number associated with the name in the jazbook
function findName1(jazbook, name) {
  if(!Array.isArray(jazbook) || !jazbook.length || typeof name !== 'string') return false;

  for (let i = 0; i < jazbook.length; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject1(jazbook) {
  return jazbook.reduce((jazbookObj, subarray) => {
    jazbookObj[subarray[0]] = subarray[1];
    return jazbookObj;
  }, {});
}

//------------MY SOLUTION-------------------------
//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  return jazbook.filter(arr => arr[0] === name)[0][1];
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  let phoneBook = jazbook.reduce((obj, curr) => {
    obj[curr[0]] = curr[1];
    return obj
  }, {});
  return phoneBook;
}

function Phonebook () {
  this.phonebook = [];
}

Phonebook.prototype.add = function(name, number) {
  return this.phonebook.push({name, number});
}

Phonebook.prototype.remove = function(name) {
  this.phonebook = this.phonebook.filter(listing => 
    listing.name !== name
  );
}

//--------------------------CODESMITH WAY-------------------
//start search from middle after sorting
function findName(jazbook, name) {
  jazbook.sort((a,b) => a[0 > b[0]]);
  let mid = Math.floor(jazbook.length/2); 
  //if there is no middle fail
  if(jazbook[mid] === undefined) return false;
  //return number if found correct name
  if (jazbook[mid][0] === name) return jazbook[mid][1];
  return jazbook[mid][0] > name ? findName(jazbook.slice(0, mid), name) : findName(jazbook.slice(mid + 1), name);
}

///////////////////////////////////////////////

  let jazbook = [
    ['alex','301-844-3421'],
    ['jae','301-844-1211'],
    ['david','301-844-0978'],
    ['travis','301-844-8505'],
    ['jasmine','1800-974-4539'],
  ];

// console.log( findName(jazbook, 'david') )
// console.log( makePhoneBookObject(jazbook) )

let book = new Phonebook();
book.add('nancy', '345-333-2222');
book.add('charlie', '345-333-2222');
book.add('jimmy', '345-333-2222');
book.add('larry', '345-333-2222');
//book.remove('nancy');
console.log(book); 



//////////////////////////////////////////////////
const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;