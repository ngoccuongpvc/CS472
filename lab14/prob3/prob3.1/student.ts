import Question from "./question";

export default class Student {
    studentId: number;
    answers: Question[];

    constructor(studentId: number) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question: Question): void {
        this.answers.push(question);
    }
}