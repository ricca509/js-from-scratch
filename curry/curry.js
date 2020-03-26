const curry = fn => {
  const arity = fn.length;
  let argsArray = [];
  return function curried(...args) {
    argsArray = [...argsArray, ...args];

    if (argsArray.length >= arity) {
      return fn(...argsArray);
    }

    return curried;
  };
};

module.exports = curry;
