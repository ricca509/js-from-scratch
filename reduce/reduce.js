/*
The reduce() method executes the callback once for each assigned value present in the array, taking four arguments:

- accumulator
- currentValue
- currentIndex
- array

The first time the callback is called, accumulator and currentValue can be one of two values. 
If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, 
and currentValue will be equal to the first value in the array. If no initialValue is provided, 
then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

Note: If initialValue is not provided, reduce() will execute the callback function starting at index 1, 
skipping the first index. If initialValue is provided, it will start at index 0.

If the array is empty and no initialValue is provided, TypeError will be thrown.

If the array only has one element (regardless of position) and no initialValue is provided, 
or if initialValue is provided but the array is empty, the solo value will be returned without calling callback.
*/

const reduce = (arrayArg, reduceFn, initialValue) => {
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
    accumulator = internalArray.shift();
  }

  internalArray.forEach((arrayElem, idx) => {
    accumulator = reduceFn(accumulator, arrayElem, idx, arrayArg);
  });

  return accumulator;
};

module.exports = reduce;
