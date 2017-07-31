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

function applyIt1(func, args) {


    if (args.length === 0) {
        return func();
    }

    if (args.length === 1) {
        return func(args[0]);
    }

    if (args.length === 2) {
        return func(args[0], args[1]);
    }

    if (args.length === 3) {
        return func(args[0], args[1], args[2]);
    }

    if(args.length === 4) {
        return func(args[0], args[1], args[2], args[3]);
    }
}



//solution

function applyIt2 (func, args) {
    return function () {
        return func(...args);
    }
}

function applyIt (func, args) {
    let funcStr = 'func(';

    const argList = args.map(function (element, i){
        return `args[${i}]`
    });
    funcStr += argList.join(',') + ');';

    return function () {
        return eval(funcStr);
    }
}



module.exports = applyIt;
