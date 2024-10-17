import { useState } from "react";

export default function CreateStudentForm(props) {
    const {addStudent} = props;

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [program, setProgram] = useState("");

    const reset = (event) => {
        event.preventDefault();
        setId(() => "");
        setName(() => "");
        setProgram(() => "");
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await addStudent({
                id: id,
                name: name,
                program: program
            })
            setId(() => "");
            setName(() => "");
            setProgram(() => "");
        } catch (error) {
            alert(error.message);
        }
    }

    const handleIDChange = (event) => {
        setId(() => event.target.value.replace(/[^\d]/ig, ""));
    }
    const handleNameChange = (event) => {
        setName(() => event.target.value);
    }
    const handleProgramChange = (event) => {
        setProgram(() => event.target.value);
    }
    return (
        <div className="width-100">
            <h1>Create a student</h1>
            <form>
                <div>
                    <label className="w-100">
                        <div>ID:</div>
                        <input
                            className="form-control"
                            type="text"
                            maxlength="6"
                            id="id"
                            value={id}
                            onChange={handleIDChange}
                            placeholder="Enter student id"
                        />
                    </label>
                </div>
                <div>
                    <label className="w-100">
                        <div>Name:</div>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter student name"
                        />
                    </label>
                </div>
                <div>
                    <label className="w-100">
                        <div>Program:</div>
                        <input
                            className="form-control"
                            type="text"
                            value={program}
                            onChange={handleProgramChange}
                            placeholder="Enter student program"
                        />
                    </label>
                </div>
                <div className="flex w-100">
                    <button className="btn btn-secondary ml-auto" type="button" onClick={reset}>
                        Reset
                    </button>
                    <button className="btn btn-primary ml-1" type="button" onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}