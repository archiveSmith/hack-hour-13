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
    let mode = 0;
    let modeObj = {"highestCount": 0};
    for (let i = 0; i < array.length; i++){
        mean+=array[i];
        if (!modeObj[array[i]]) modeObj[array[i]] = 1;
        else modeObj[array[i]]++;
    }
    for(key in modeObj){
        if (modeObj[key] > modeObj["highestCount"]) {
            modeObj["highestCount"] = modeObj[key];
            mode = key; 
        }else if (modeObj[key] === modeObj["highestCount"] && key !=="highestCount"){
            if (key > mode){ 
                modeObj["highestCount"] = modeObj[key];
                mode = key;
            } 
        }
    }
    mean = Math.floor(mean/array.length);
    console.log("mode: "+mode);
    console.log("mean: "+mean);
    return mean == mode;
}

module.exports = modemean;
