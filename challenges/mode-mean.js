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
    let mean = Math.floor(array.reduce(function(all,item,index){
         all += item;
         return all;
    })/array.length);

    let modeObj = array.reduce(function(all,item,index){  
       if(!all[item]){
            all[item] = 0;
       }
        all[item]++
        return all;
    },{});
    
    let mode = Object.keys(modeObj).sort(function(a,b){
        if(modeObj[b] === modeObj[a]){
            return Math.max(b,a);
        }
        return modeObj[b] - modeObj[a]
    })
    return Number(Object.keys(modeObj)) === mean
}

console.log(modemean([1]));
// module.exports = modemean;
