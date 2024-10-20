export default class Question {
    qid: number;
    answer: string;

    constructor(qid: number, answer: string) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer: string): boolean {
        return this.answer === answer;
    }
}