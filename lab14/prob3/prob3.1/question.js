"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }
    Question.prototype.checkAnswer = function (answer) {
        return this.answer === answer;
    };
    return Question;
}());
exports.default = Question;
