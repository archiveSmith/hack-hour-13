/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  let negInt = [];
  let posInt = [];
  let product = [];
  let posProd;

  if (array.length <= 2) return 0;

  array.forEach((int) => {
    if (int < 0) {
        negInt.push(int);
    } else {
        posInt.push(int);
    }
  });

  negInt = negInt.sort((a, b) => {
    return a < b;
  });

  negInt = negInt.splice(negInt.length - 2, negInt.length);

  postInt = posInt.sort((a, b) => {
    return a > b;
  });

  if (negInt.length >= 2) {
    for (let i = 1; i >= 0; i -= 1) {
      if (negInt[i] * -1 >= posInt[postInt.length - 1]) {
        product.push(negInt[i]);
        product.push(posInt[postInt.length - 1]);
      }
    }
    product.pop();

    product.sort((a, b) => {
      return a > b;
    });

    return product.reduce((a, b) => {
      return a *= b;
    });
  } else {
    posProd = postInt.slice(postInt.length - 3, postInt.length);

    return posProd.reduce((a, b) => {
      return a *= b;
    });
  }
}


module.exports = highestProduct;
