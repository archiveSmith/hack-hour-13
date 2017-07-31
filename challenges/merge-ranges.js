/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {

    let sorted = array.sort((a, b) => {
        a.sort((aa, ab) => aa - ab);
        b.sort((ba, bb) => ba - bb);

        return a[0] - b[0];
    });

    let sub = array[0];
    let result = [];

    for (let i = 0; i < array.length; i += 1) {

        if (array[i][0] >= sub[0] && array[i][0] <= sub[1]) {
            sub = sub.concat(array[i]).sort((a, b) => a - b);
            let temp = [sub[0], sub[3]];
            sub = temp;
        }

        else {
            result.push(sub);
            sub = array[i];
        }

        if (i === array.length - 1) result.push(sub);
    }
    return result;
}

module.exports = mergeRanges;
