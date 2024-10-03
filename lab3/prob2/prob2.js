"use strict"
let user = { name: "John", years: 30 };
// your code to the left side:
const { name, years: age, isAdmin = false } = user

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false