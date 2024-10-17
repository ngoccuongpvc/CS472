import { useContext } from "react"
import { StudentContext } from "../contexts/studentContext"

export default function StudentList() {
    const students = useContext(StudentContext);
    return (
        <div>
            <h1>All Students</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Program</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(
                            student => <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.program}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}