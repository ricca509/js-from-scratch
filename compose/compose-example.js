const compose = require("./compose");

const upper = str => str.toUpperCase();
const sayHi = str => `Hi ${str}`;
const exclaim = str => `${str}!!!`;

const screamAndGreet = compose(upper, exclaim, sayHi);

console.log(screamAndGreet("github"));
// HI GITHUB!!!
