const reduceRight = (arrayArg, reduceRightFn, initialValue) => {
  if (!Array.isArray(arrayArg)) {
    throw new Error("Provide a valid array");
  }

  if (initialValue === undefined && arrayArg.length === 0) {
    throw new TypeError("arrayArg is empty and no initialValue was provided");
  }

  if (arrayArg.length === 1 && initialValue === undefined) {
    return arrayArg[0];
  }

  if (initialValue !== undefined && arrayArg.length === 0) {
    return initialValue;
  }

  const internalArray = [...arrayArg].filter(value => value !== undefined);

  let accumulator = initialValue;

  if (initialValue === undefined) {
    accumulator = internalArray.pop();
  }

  internalArray.reverse().forEach((currentValue, index) => {
    accumulator = reduceRightFn(accumulator, currentValue, index, arrayArg);
  });

  return accumulator;
};

module.exports = reduceRight;
