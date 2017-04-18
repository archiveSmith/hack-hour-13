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

var jasmine = function (name, age) {
    if (!age) {
        return "We don't know how old " + name + " is!";
    }

    else {
        return name + " is " + age + " years old!";
    }
};

var jmoney = applyIt(jasmine, ["Jasmine"]);

function applyIt(func, args) {

    let first, second, third, fourth;

    if (args[0]) first = args[0];
    if (args[1]) second = args[1];
    if (args[2]) third = args[2];
    if (args[3]) fourth = args[3];

    return func(first, second, third, fourth);
}

module.exports = applyIt;
