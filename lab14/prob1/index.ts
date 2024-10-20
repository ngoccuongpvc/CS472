
interface Person {
    name: string,
    age: number,
    isStudent: boolean
}

function getDescription(person: Person): string {
    const name: string = person.name;
    const age: number = person.age;
    const isStudent: boolean = person.isStudent;

    return `${name} is ${age} years old and currently ${isStudent ? "a" : "NOT a"} student`;
}

const person = {
    name: "Ngoc Cuong",
    age: 23,
    isStudent: true
}


console.log(getDescription(person));