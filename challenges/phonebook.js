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

   jazbook = [
    ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
    ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
  ];


// function findName(book, name){
//   for(let i = 0; i < book.length; i++){
//     if(book[i][0] === name) return book[i][1]
//   }
//   return false;
// }

// console.log(findName(jazbook, 'jasmine'))

// function makePhoneBookObject(jazbook){
//   let myObj = {};
//   for(let i =0; i < jazbook.length; i++){
//     myObj[jazbook[i][0]] = jazbook[i][1] 
//   }
//   return myObj;
// }
// console.log(makePhoneBookObject(jazbook))


//SOLUTION
function findName(jazbook, name){
  jazbook.sort((a,b) => (a[0] > b[0]));
  let mid = Math.floor(jazbook.length/2);
  if(jazbook[mid] === undefined) return false;
  if(jazbook[mid][0] === name) return jazbook[mid][1];
  return jazbook[mid][0] > name ? findName(jazbook.slice(0, mid), name) : findName(jazbook.slice(mid +1), name);
}

function makePhoneBookObject(){
  this.book = {};
  jazbook.forEach(record => this.book[record[0]] = record[1]);
}

PhoneBook.prototype.add = function(name, number){
  this.book[name] = number;
}

PhoneBook.prototype.lookup = function(name){
  return this.book[name];
}

PhoneBook.prototype.remove = function(name){
  let record = this.book[name];
  delete this.book[name];
  return record;
}










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

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;