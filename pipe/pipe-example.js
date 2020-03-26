const pipe = require("./pipe");

const upper = str => str.toUpperCase();
const sayHi = str => `Hi ${str}`;
const exclaim = str => `${str}!!!`;

const screamAndGreet = pipe(sayHi, exclaim, upper);

console.log(screamAndGreet("github"));
// HI GITHUB!!!
