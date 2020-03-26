const map = (arrayArg, mapFn, thisArg) => {
  if (!Array.isArray(arrayArg)) {
    throw new Error("Provide a valid array");
  }
  let resultArr = [];

  arrayArg.forEach((arrayElem, idx) => {
    resultArr = [...resultArr, mapFn.call(thisArg, arrayElem, idx, arrayArg)];
  });

  return resultArr;
};

module.exports = map;
