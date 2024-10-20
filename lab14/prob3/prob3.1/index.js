"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_js_1 = require("./student.js");
var question_js_1 = require("./question.js");
var quiz_js_1 = require("./quiz.js");
var student1 = new student_js_1.default(10);
student1.addAnswer(new question_js_1.default(2, 'a'));
student1.addAnswer(new question_js_1.default(3, 'b'));
student1.addAnswer(new question_js_1.default(1, 'b'));
var student2 = new student_js_1.default(11);
student2.addAnswer(new question_js_1.default(3, 'b'));
student2.addAnswer(new question_js_1.default(2, 'a'));
student2.addAnswer(new question_js_1.default(1, 'd'));
var students = [student1, student2];
var questions = [new question_js_1.default(1, 'b'), new question_js_1.default(2, 'a'), new question_js_1.default(3, 'b')];
var quiz = new quiz_js_1.default(questions, students);
var scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
var scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
var average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
