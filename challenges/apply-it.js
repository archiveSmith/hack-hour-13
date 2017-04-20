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

function applyIt2(func, args) {
  return func(...args);
}

function applyIt(func, args) {
  let funcStr = 'func(';
  const argList = args.map(function(element, i) {
    return `args[${i}]`;
    // `` include variable in the string
  });
  funcStr += argList.join(',') + ');';
  // eval the function
  console.log(funcStr);
  return function() {
    return eval(funcStr);
  };
}

var jae = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};

var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero);

var jasmine = function(name, age) {
  if (!age) {
    return "We don't know how old " + name + " is!";
  } else {
    return name + " is " + age + " years old!";
  }
};
var jmoney = applyIt(jasmine, ["Jasmine"]);
console.log(jmoney);

module.exports = applyIt;
