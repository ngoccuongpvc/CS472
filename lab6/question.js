export default function Question(qid, answer) {
    this.qid = qid
    this.answer = answer
}

Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}