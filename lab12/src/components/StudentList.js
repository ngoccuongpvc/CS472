export default function StudentList(props) {
    const { students, deleteStudent } = props;

    const onClickDelete = async (id) => {
        try {
            await deleteStudent(id);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <h1>All Students</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Program</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(
                            student => <tr key={student.id}>
                                <td className="align-middle">{student.id}</td>
                                <td className="align-middle">{student.name}</td>
                                <td className="align-middle">{student.program}</td>
                                <td className="align-middle">
                                    <button className="btn btn-danger" onClick={() => onClickDelete(student.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}