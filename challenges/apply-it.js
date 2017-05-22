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
  // convert func to string
  const funcStr = func.toString();
  // get names of parameters
  // parse params and function body from function string
  const funcMatch = funcStr.match(/^function \(([\w\s,]*)\) {((?:\n|.)+)}$/);
  const funcParams = funcMatch[1].split(', ');
  let funcContents = funcMatch[2];
  // map params to given args
  funcParams.forEach((param, i) => {
    // argument to apply to param
    const arg = args[i];
    // get stringified argument to put in parameter name's place
    // special case for functions and dates
    const argStr = JSON.stringify(arg);
    // create RegExp object to enable global replacement of params
    const paramRe = new RegExp(param, 'g');
    // replace parameter instances w/ variables
    funcContents = funcContents.replace(paramRe, argStr);
  })
  return new Function(funcContents);
}

var jae = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};
var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"

var jasmine = function(name, age) {
  if(!age){
    return "We don't know how old " + name + " is!";
  }
  else{
    return name + " is " + age + " years old!";
  }
};
var jmoney = applyIt(jasmine, ["Jasmine"]);
console.log(jmoney()); //Returns "We don't know how old Jasmine is!"

module.exports = applyIt;
