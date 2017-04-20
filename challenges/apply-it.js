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
  // build up the func call as a string and eval it
  let funcStr = 'func(';

  // create an array containing each element of the arg list (arg[0] through arg[n])
  const argList = args.map((element, i) => {
    // cannot do return `${element}` because 'South Carolina' 
    // will have to do toString for strings so that it keeps the space as well as the quotes
    //        return (typeof element === 'string') ? `${element.toString()}` : `${element}`;
    return `args[${i}]`;


  }) 

  // put all the arguments together and close out the parens
  funcStr += argList.join(',') + ');'

  // eval the function
  return () => eval(funcStr);
}

// this is the correct method! Yay! :D, it just doesn't fully work yet
// function applyIt(func, args) {
//   // just pass args into the function
//   let thefunc = func.toString();
//   let callback = '';

//   // grab only the function name
//   for (let i = 9; thefunc[i] !== '('; i += 1) {
//     callback += thefunc[i];
//   }

//   // add the opening parens to the callback
//   callback += '(';

//   // convert arguments to string, and add to the string
//   for (let i = 0; i < args.length; i += 1) {
//     // if it is the first arg
//     if (i === args.length - 1) {
//       callback += args[i];
//       callback += ')';
//     } else {
//       callback += `${args[i]},`;
//     }
//   }

//   // eval the function
//   return () => eval(callback);
// }


module.exports = applyIt;
