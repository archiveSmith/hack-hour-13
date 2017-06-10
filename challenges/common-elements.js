// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input
  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];
// your output would be [ 12, 'ferret']
// if there are no common numbers or strings return the string "Nothing in Common!"

//ASK INTERVIEWER 
//is order important and what order do you want it in?  


function commonElements(array1, array2, array3, array4){
  let args = Array.from(arguments); 

  let dups = args.reduce((acc, curr) => 
    curr.filter(item => 
      acc.indexOf(item) !== -1 
  )).reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return dups.length > 0 ? dups : "Nothing in Common!"
}

//------------------------------------------------
function commonElements2(arr1, arr2, arr3, arr4) {

  const common = arr1.filter((val) => 
    arr2.includes(val) && arr3.includes(val) && arr4.includes(val)
  ).sort().filter((val, i, arr) => val !== arr[i + 1]); 

  return common.length > 0 ? common: "nothing in common!";
}

//////////////////////////////////////////////////////////////
var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
var array4 = ['ferret',12,12,45,9,66,77,78,2000];
// let array1 = [4,5];
// let array2 = [3,1];
// let array3 = [9,9];
// let array4 = [4,3];

console.log( commonElements2(array1, array2, array3, array4) )









///////////////////////////////////////////////////////////////////////
module.exports = commonElements;