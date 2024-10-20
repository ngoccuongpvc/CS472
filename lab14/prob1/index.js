function getDescription(person) {
    var name = person.name;
    var age = person.age;
    var isStudent = person.isStudent;
    return "".concat(name, " is ").concat(age, " years old and currently ").concat(isStudent ? "a" : "NOT a", " student");
}
var person = {
    name: "Ngoc Cuong",
    age: 23,
    isStudent: true
};
console.log(getDescription(person));
