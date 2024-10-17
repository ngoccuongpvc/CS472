import _ from "lodash"
import Student from "../model/student.js"

const studentController = {
    getStudents: (req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            res.status(200).json(Student.getAll())
        } else {
            next();
        }
    },
    getStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const student = Student.getStudentById(id * 1);
            if (student) {
                res.status(200).json(student);
            }
            else res.status(404).json({ message: "Not found a student" });
        }
        else res.status(400).json({ message: "provide id" });
    },
    createStudent: (req, res, next) => {
        const { id, name, program } = req.body;
        if (id && name && program) {
            const student = new Student(id * 1, name, program);
            if (student.create())
                res.status(201).json({ message: "created" })
            else
                res.status(409).json({ message: "student is already existed" })
        }
        else {
            res.status(400).json({ message: "provide all information" })
        }
    },
    deleteStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            if (Student.deleteStudentById(id * 1)) {
                res.status(200).json({
                    message: "Deleted successfully"
                });
            } else {
                res.status(404).json({
                    message: "Student is not found"
                })
            }
        }
        else res.status(400).json({ message: "Please provide id" });
    },
    updateStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            if (!Student.getStudentById(id * 1)) {
                res.status(404).json({
                    meesage: "Student is not found"
                })
                return;
            }
            const name = req.query.name;
            const program = req.query.program;
            const student = Student.updateStudentById(id * 1, name, program);
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(400).json({
                    meesage: "Updated unsuccessully"
                })
            }
        }
        else res.status(400).json({ message: "Please provide id" });
    },
    getStudentsByQuerystring: (req, res, next) => {
        let students = Student.getAll();
        if (req.query.sort && ["id", "name", "program"].includes(req.query.sort)) {
            const dir = req.query.dir ?? "asc";
            students = _.orderBy(students, [req.query.sort], [dir]);
        }
        if (req.query.id) {
            students = _.filter(students, {id: req.query.id * 1});
        }
        if (req.query.name) {
            students = _.filter(students, ({name}) => name.includes(req.query.name));
        }
        if (req.query.program) {
            students = _.filter(students, {program: req.query.program});
        }
        res.status(200).json(students);
    },
};

export default studentController;