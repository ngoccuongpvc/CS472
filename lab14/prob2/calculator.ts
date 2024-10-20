
interface CalculatorInterface {
    add(a: number, b: number): number;
    substract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

export default class Calculator implements CalculatorInterface {
    add(a: number, b: number): number {
        return a + b;
    }

    substract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }
}