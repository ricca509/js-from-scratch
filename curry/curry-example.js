const curry = require("./curry");

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(sum(1, 2, 3));
// 6
console.log(curriedSum(1)(2)(3));
// 6
