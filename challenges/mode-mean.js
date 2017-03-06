/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 let arr = [1,2,1,2,3]

 function modemean(array) {
   let mean = Math.floor( (array.reduce((accum,curr) => accum+curr)) / array.length );

   let modeCount = 1;
   let contestCount = 0;
   let mode = array[0];
   let contestant;

   let sorted = array.sort(function(a,b){return a-b})
   console.log(sorted)

     for (let i=0; i < sorted.length; i++) {
       console.log("mode is",mode)
       console.log("contestant is ",contestant)
       console.log("prev counter is ", modeCount)
       console.log("next counter is ", contestCount + "\n")
       if (sorted[i] === sorted[i+1] && modeCount > contestCount) {
         modeCount++;
         mode = sorted[i];
         contestant = sorted[i+1];
       } else if (sorted[i] === sorted[i+1] && modeCount < contestCount) {
         contestCount++;
         mode = sorted[i];
         contestant = sorted[i+1];
       } else if (sorted[i] !== sorted[i+1] && modeCount > contestCount) {
         contestCount++;
         mode = sorted[i];
         contestant = sorted[i+1]
       } else if (sorted[i] !== sorted[i+1] && modeCount <= contestCount) {
         contestCount = 0;
         modeCount = 0;
         mode = sorted[i+1];
         contestant = undefined;
       }
     }

   return mode;
 }

 modemean(arr)

module.exports = modemean;
