import Calculator from "./calculator";

const myCalculator = new Calculator();

console.log(`1 + 2 = ${myCalculator.add(1, 2)}`);
console.log(`5 - 10 = ${myCalculator.substract(5, 10)}`);
console.log(`10 * 0.5 = ${myCalculator.multiply(10, 0.5)}`);
console.log(`121 / 11 = ${myCalculator.divide(121, 11)}`);