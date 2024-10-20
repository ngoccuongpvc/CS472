import Question from "./question";
import Student from "./student";

export default class Quiz {
    questions: Map<number, Question>;
    students: Student[]

    constructor(questions: Question[], students: Student[]) {
        this.questions = new Map<number, Question>();
        for (const question of questions) {
            this.questions.set(question.qid, question);
        }
        this.students = students;
    }

    scoreStudentBySid(sid: number) {
        const studentIndex: number = this.students.findIndex(s => s.studentId === sid);
        if (studentIndex < 0) {
            throw new Error(`Can not find student id ${sid}`);
        }
        const student: Student = this.students[studentIndex];
        let score = 0;
        for (const studentAnswer of student.answers) {
            const question = this.questions.get(studentAnswer.qid);
            if (question?.checkAnswer(studentAnswer.answer)) {
                score += 1;
            }
        }
        return score;
    }

    getAverageScore(): number {
        let totalScore: number = 0;
        for (const student of this.students) {
            totalScore += this.scoreStudentBySid(student.studentId);
        }
        return totalScore / this.students.length;
    }
}