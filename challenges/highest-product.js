/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length < 3) return 0;

   const [negs, pos] = array.reduce((arr, num) => {
     num < 0 ? arr[0].push(num) : arr[1].push(num);
     return arr;
   },[[],[]]);

   negs.sort();
   pos.sort((a,b) => b-a);

   const posProd = pos[0] * pos[1] * pos[2];
   const negProd = negs[0] * negs[1] * pos[0];

   if (isNaN(posProd) && isNaN(negProd)) return 0;
   else if (isNaN(posProd)) return negProd;
   else if (isNaN(negProd)) return posProd;
   else return posProd > negProd ? posProd : negProd;
 }


module.exports = highestProduct;
