"use strict"

function computeSumOfSquares(arr) {
    return arr.reduce((sum, e) => sum + e ** 2);
}

console.log("Problem 1.1");
console.log(computeSumOfSquares([1, 2, 3])); // 14

const printOddNumbersOnly = function (arr) {
    console.log(arr.filter(e => e & 1));
}

console.log("Problem 1.2");
printOddNumbersOnly([1, 2, 3, 4, 5]); // [1, 3, 5]

const printFibo = (n, a, b) => {
    const fibonacci = [a, b];
    let [f1, f2] = [a, b];
    for (let i = 2; i < n; ++i) {
        let f3 = f1 + f2;
        fibonacci.push(f3);
        [f1, f2] = [f2, f3];

    }
    console.log(fibonacci.slice(0, n));
}

console.log("Problem 1.3");
printFibo(1, 0, 1); // [0]
printFibo(2, 0, 1); // [0, 1]
printFibo(3, 0, 1); // [0, 1, 1]
printFibo(6, 0, 1); // [0, 1, 1, 2, 3, 5]
printFibo(10, 0, 1); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]