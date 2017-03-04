// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

// function fizzbuzz(num) {
//     var outputArr = [];
//     for(var i = 1; i<=num; i++){
//         var print= '';
//         if(i%3===0 || i%5===0){
//             switch(true) {
//                 case i%3===0:
//                     print += "fizz";
//                     break;
//                 case i%5===0:
//                     print += "buzz";
//                     break;
//                 default:
//                     console.log("don't print");
//             }
//             outputArr.push(print);
//         }else if ((i%3===0 && i%5===0)){
//             print += "buzz";
//         }else{
//             outputArr.push(i);
//         }
//     }
//     return outputArr;
// }

function fizzbuzz(num) {
    var outputArr = [];
    for(var i = 1; i<=num; i++){
        var print= '';
        if(i%3===0){
            print += "fizz"
            if(i%5===0){
                print += "buzz";
            }
            outputArr.push(print);
        }else if (i%5===0){
            print += "buzz";
            outputArr.push(print);
        }else{
            outputArr.push(i);
        }
    }
    return outputArr;
}

// console.log(fizzbuzz(16));
var y;
var x = 2;
console.log(typeof y);
module.exports = fizzbuzz;
