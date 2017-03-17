false === '0'; //false; any string is truthy
false == '0';  //true; double == makes this string also possibly an integer which makes 0 be falsy 

//Book "you don't know JS"  Kyle Simpson 


//------------------------------------------
function foo1() {
  return {
    bar: 'hello'
  };
}

function foo2() {
  return 
  {
    bar: 'hello'
  };
}

console.log(foo1()); //RETURNS the object
console.log(foo2());  //returns undefined b/c return is on own line

//--------------------------------------------

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();  //undefined, 2 
