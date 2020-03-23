const reduce = require("./reduce");

// Example from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(reduce(array1, reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(reduce(array1, reducer, 5));
// expected output: 15

const flattened = reduce(
  [
    [0, 1],
    [2, 3],
    [4, 5]
  ],
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

console.log(flattened);
