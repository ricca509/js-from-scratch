const bind = require("./bind");

// Example from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
const mod = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = mod.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = bind(unboundGetX, mod);
console.log(boundGetX());
// expected output: 42
