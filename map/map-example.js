const map = require("./map");

// Examples from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = map(array1, x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

let reformattedArray = map(kvArray, obj => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
