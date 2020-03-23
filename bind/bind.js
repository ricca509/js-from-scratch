const bind = (fn, thisArg, ...preappliedArgs) => {
  return (...args) => {
    return fn.apply(thisArg, ...[...args, ...preappliedArgs]);
  };
};

module.exports = bind;
