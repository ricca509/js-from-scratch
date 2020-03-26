const compose = (...fns) => args =>
  fns.reduceRight((fnArgs, fn) => fn(fnArgs), args);

module.exports = compose;
