/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  let arr = Array.from(arguments)[1];
  return function inner() {
    return func(...args)
    // return func(...arr)
  }
  //normal way; also need ...args in parameters
  //return func.apply(this, ...args)
}

//////////////////////////TESTING/////////////////////////////////////
var jae = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};
var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
/////////////////////////////////////////////////////////////////////
console.log( jaero() );
//console.log( applyIt(jae, ['Jae', 19, 'SC']))

/*
get arguments 2 to the end and invoke the function with them 
*/




module.exports = applyIt;
