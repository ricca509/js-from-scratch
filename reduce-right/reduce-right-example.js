const reduceRight = require("./reduce-right");

// Example from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

const array1 = reduceRight(
  [
    [0, 1],
    [2, 3],
    [4, 5]
  ],
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
