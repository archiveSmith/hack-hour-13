/**
 * applies the invoked array to the function's parameter list
 * Example:
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
//use backticks and  dollar sign to inclue a variable within a string 
function applyIt(func, args) {
  let funcStr = 'func('
  const argList = args.map(function(el, i){
    return `args[$(i)]`
    //return (typeof elemetn === 'string') ? "'" + element + "'": element
  });
  funcStr += argList.join(',') + ')'; 
  return function(){
    return eval(funcStr)
  }

  // return function(){
  //   return func(...args);
  }
  // let calledFunc = (func()).split(" ")
  // for(let i = 0; i <args.length; i ++){
  // //console.log(func().bind(args[i]))
  //   let index = calledFunc.indexOf('undefined'); 
  //   calledFunc[index] = args[i]
  // }
  // return func.bind(args)
  // console.log(func("Jae", 19, "South Carolina"))
  // return calledFunc.join(" ");


module.exports = applyIt;

var jae = function (name, age, location) {
   return name + " is " + age + " and he lives in " + location;
 };
applyIt(jae, ["Jae", 19, "South Carolina"]);
jaero(); //Returns "Jae is 19 and he lives in South Carolina"