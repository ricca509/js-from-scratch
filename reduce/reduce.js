const reduce = (arrayArg, reduceFn, initialVal) => {
  let accumulator = initialVal || null;

  if (!Array.isArray(arrayArg)) {
    throw new Error("Provide a valid array");
  }

  arrayArg.forEach((arrayElem, idx, arr) => {
    accumulator = reduceFn(accumulator, arrayElem, idx, arr);
  });

  return accumulator;
};

module.exports = reduce;
