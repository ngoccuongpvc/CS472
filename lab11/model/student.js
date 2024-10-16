import _ from 'lodash';

const students = [
    { id: 116257, name: "Anna Smith", program: "MBA" },
    { id: 615789, name: "John Doe", program: "Compro" },
    { id: 116868, name: "Tom Jerryh", program: "MBA" },];

export default class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }

    static getAll() {
        return structuredClone(students); //students.map(e=>e)
    }

    static getStudentById(id) {
        return _.find(students, {id: id});
    }

    static deleteStudentById(id) {
        const index = _.findIndex(students, {id: id});
        if (index === -1) {
            return false;
        }
        students.splice(index, 1);
        return true;
    }

    static updateStudentById(id, name, program) {
        const student = Student.getStudentById(id);
        if (!student) {
            return null;
        }
        if (name) {
            student.name = name;
        }
        if (program) {
            student.program = program;
        }
        return student;
    }

    create() {
        const student = Student.getStudentById(this.id)
        if (!student) {
            students.push(this)
            return true;
        }
        return false;
    }

}