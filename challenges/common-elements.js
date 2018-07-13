// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']
function commonElements(array1, array2, array3, array4){

  var obj = {};
  arguments[0].forEach(function(item, index) {
    obj[item] = 1;
  });

  for (var i = 1; i < arguments.length; i++) {
    arguments[i].forEach(function(item) {
      if (obj[item] === i) obj[item] = i + 1;
    });
  }

  for (var key in obj) {
    if (obj[key] < 4) delete obj[key];
   }

   if (Object.keys(obj).length === 0) return "Nothing in Common!"
   return Object.keys(obj);
 }

// if there are no common numbers or strings return the string "Nothing in Common!"

// function commonElements(array1, array2, array3, array4){
//   const objAll = {};
//   const arrays = [...arguments];
//   //this loop, basically linear through all arrays, makes obj of all elements, not counting dups
//   for (let i = 0; i < 4;i++) {
//     const obj = {};
//     for (let j = 0; j < arrays[i].length; j++) {
//        obj[arrays[i][j]] ? obj[arrays[i][j]] : obj[arrays[i][j]] = 1;
//     }
//     //this loop makes master obj of all elements, counting how many objs each appears in
//     const keys = Object.keys(obj);
//     keys.forEach(key => {
//       objAll[key] ? objAll[key]++ : objAll[key] = 1;
//     })
//   }
//   //this makes array of any elements appearing 4 times, ie in each array.
//   const result = [];
//   for (const k in objAll) {
//     if (objAll[k] === 4) result.push(k);
//   }
//   if (!result.length) return 'Nothing in Common!'
//   return result;
// }

module.exports = commonElements;