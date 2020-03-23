const map = (arrayArg, mapFn, thisArg) => {
  let resultArr = [];

  if (!Array.isArray(arrayArg)) {
    throw new Error("Provide a valid array");
  }

  arrayArg.forEach((arrayElem, idx, arr) => {
    resultArr = [...resultArr, mapFn.call(thisArg, arrayElem, idx, arr)];
  });

  return resultArr;
};

module.exports = map;
