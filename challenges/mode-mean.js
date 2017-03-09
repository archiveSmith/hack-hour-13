/*
 * Given an array of numbers, determine if the mode and mean of 
 the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
function modemean(array) {
    //finding a mean
  var sum = 0;
  var mean = 0;
  for( var i = 0; i < array.length; i++ ){
    sum += parseInt( array[i], 10 );
  }
  mean = Math.floor(sum/array.length);
  console.log(mean);
  //finding a mode
  var mode = {};
  var max = 0;
  var counter = 0;

  array.forEach(function(elem) {
      if (mode[elem]) { 
        mode[elem]++; 
      }
      else { 
        mode[elem] = 1; 
        
      } 

      if (counter < mode[elem]) { 
            max = elem;
            counter = mode[elem];
        }
      else if (counter == mode[elem] && elem > max){
        max = elem;
        counter = mode[elem];
      }
    });
    console.log(max);
  
    if (mean === max) {
      return true;
    }
    else {
      return false;
  }
}

module.exports = modemean;
