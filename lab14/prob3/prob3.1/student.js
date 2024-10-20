"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }
    Student.prototype.addAnswer = function (question) {
        this.answers.push(question);
    };
    return Student;
}());
exports.default = Student;
