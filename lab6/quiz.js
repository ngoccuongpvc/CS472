export default function Quiz(questions, students) {
    this.questions = new Map();
    for (const question of questions) {
        this.questions.set(question.qid, question);
    }
    this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (sid) {
    const student = this.students.find(s => s.studentId === sid);
    let score = 0;
    for (const studentAnswer of student.answers) {
        const question = this.questions.get(studentAnswer.qid);
        if (question.checkAnswer(studentAnswer.answer)) {
            score += 1;
        }
    }
    return score;
}

Quiz.prototype.getAverageScore = function() {
    let totalScore = 0;
    for (const student of this.students) {
        totalScore += this.scoreStudentBySid(student.studentId);
    }
    return totalScore / this.students.length;
}