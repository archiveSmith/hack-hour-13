(function() {
  return typeof arugments
})

typeof arguments === 'object';



//delete only works on object properties  unless variables are on global object so 
x = 5
delete x . //works 

//thus can delete functions b/c functions are objects 



var y = 1, x = y = typeof x;
x; 
x === undefined 



var x = 1;
if (function(){}){
  x += typeof f;
}
x;

// returns 1undefined;  two strings added together



var x = [typeof x, typeof y][1];
typeof typeof x;
//string  typeof always returns a string



(function f() {
  function f(){return 1;}
  return f();
  function f(){return 2;}
})()
//returns 2 b/c of hoisting; function declarations and variables are hoisted 



typeof null // object b/c null is an object



(function(){
  var a = b = 3;
})();

//in other words
b = 3
var a = b

//b is on global object; 
//a is only referened inside func body 

//var a = b = 3 is NOT shorthand for;
var b = 3;
var a = b;












