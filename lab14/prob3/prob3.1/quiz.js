"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quiz = /** @class */ (function () {
    function Quiz(questions, students) {
        this.questions = new Map();
        for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
            var question = questions_1[_i];
            this.questions.set(question.qid, question);
        }
        this.students = students;
    }
    Quiz.prototype.scoreStudentBySid = function (sid) {
        var studentIndex = this.students.findIndex(function (s) { return s.studentId === sid; });
        if (studentIndex < 0) {
            throw new Error("Can not find student id ".concat(sid));
        }
        var student = this.students[studentIndex];
        var score = 0;
        for (var _i = 0, _a = student.answers; _i < _a.length; _i++) {
            var studentAnswer = _a[_i];
            var question = this.questions.get(studentAnswer.qid);
            if (question === null || question === void 0 ? void 0 : question.checkAnswer(studentAnswer.answer)) {
                score += 1;
            }
        }
        return score;
    };
    Quiz.prototype.getAverageScore = function () {
        var totalScore = 0;
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            totalScore += this.scoreStudentBySid(student.studentId);
        }
        return totalScore / this.students.length;
    };
    return Quiz;
}());
exports.default = Quiz;
