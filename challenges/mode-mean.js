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
    if(!array.length) {
        console.log("No entries provided");
        return;
    }

    let mean = 0;
    let mode;
    let max = 0;
    let modes = [];
    const storage = {};

    array.forEach(function(x) {
        mean += x;
        if (storage[x] === undefined) {
            storage[x] = 1;
        } else storage[x]++;
    })

    for (key in storage) {
        if (storage[key] >= max) {
            max = storage[key];
            modes.push(key);
        }
    }

    mean = Math.floor(mean / array.length);
    mode = Math.max.apply(null, modes);
    return mean === mode;
}

module.exports = modemean;
