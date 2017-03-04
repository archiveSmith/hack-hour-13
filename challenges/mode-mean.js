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
    //find mode
    runningMode = {};
    let mode;
    let temp;
    let mean = 0;
    for (i=0; i<array.length; i++) {
        mean += array[i]; 
        if (runningMode[array[i]] === undefined) {
            runningMode[array[i]] = 1;
        } else {
            runningMode[array[i]]++;
        }
    }
    mean = Math.floor(mean/array.length);

    for (key in runningMode) {
        if (mode !== undefined) {
            if (runningMode[key] > runningMode[mode]) {
                mode = key;
            } else if (runningMode[key] === runningMode[mode]) {
                mode = parseInt(key) > parseInt(mode) ? key : mode
            }
        } else {
            mode = key;
        }
    }
    console.log(runningMode)
    return parseInt(mode) === mean;
}

//console.log(modemean([3,5,7,5,6,8]));

module.exports = modemean;
