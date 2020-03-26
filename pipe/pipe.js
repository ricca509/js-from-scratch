const pipe = (...fns) => args => fns.reduce((fnArgs, fn) => fn(fnArgs), args);

module.exports = pipe;
