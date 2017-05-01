/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
 */


function findInOrderedSet(arr, target) {
    let low = 0;
    let high = arr.length-1;
    let mid = Math.floor((high - low) / 2);

    while(mid !== high && mid !== low) {
        if(arr[mid] === target || arr[high] === target || arr[low] === target) return true;
        if(target > arr[high] || target < arr[low]) return false;

        if(target > arr[mid]) {
            low = mid;
        }
        else {
            high = mid;
        }
        mid = Math.floor((high - low) / 2);
    } 
    return false;

}


module.exports = findInOrderedSet;