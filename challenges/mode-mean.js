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


function modemean(array) {
    var sum = 0;
    for(var i = 0 ; i < array.length ; i++){
        sum++
    }
    var average = sum/array.length;

    var isMode = {};
    for(var i = 0; i < array.length ; i++){
        if (array[i] in isMode) {
            isMode[array[i]] += 1;
        }
        else {
            isMode[array[i]] = 0;
        }
    }
    // console.log(average);
    // console.log(isMode);
    var mode = Object.keys(isMode).reduce(function(a, b){ return isMode[a] > isMode[b] ? a : b });
    // console.log(mode);
    // console.log("debug 2" +mode + "_"+average);
    if(average === mode) {
        return true;
    }else{
        return false;
    }
}

var arr1 = [1,1,2,2,2,3,4,5];
var arr2 = [1,4,5,6,7];
console.log(modemean(arr1));

module.exports = modemean;
