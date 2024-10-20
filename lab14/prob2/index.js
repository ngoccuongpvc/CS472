"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var myCalculator = new calculator_1.default();
console.log("1 + 2 = ".concat(myCalculator.add(1, 2)));
console.log("5 - 10 = ".concat(myCalculator.substract(5, 10)));
console.log("10 * 0.5 = ".concat(myCalculator.multiply(10, 0.5)));
console.log("121 / 11 = ".concat(myCalculator.divide(121, 11)));
