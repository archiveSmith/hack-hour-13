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
    let mean = 0;
    array.forEach(x => {
        mean += x;
    });
    mean = mean/array.length;

    let holder = {};
    array.forEach(x => {
        if (holder[x]) {
            holder[x] = holder[x] + 1;
        } else {
            holder[x] = 1;
        }
    });
    
    let holderarray = []
    for(var key in holder) {
      holderarray.push([key, holder[key]]);
    }
    holderarray.sort((a, b) => {
        return b[1] - a[1];
    });
    let multiplemode = []
    let count = holderarray[0][1];
    holderarray.forEach(subarray => {
        if(+subarray[1] === count) {
            multiplemode.push(subarray[0]);
        }
    });
    multiplemode.sort((a, b) => {
        return b - a;
    })
    let mode = multiplemode[0];

    if (mean === +mode) {
        return true;
    } else {
        return false;
    }
}

module.exports = modemean;
