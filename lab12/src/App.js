import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import CreateStudentForm from "./components/createStudentForm";
import StudentList from './components/StudentList';
import { useEffect, useState } from 'react';
import { apis } from './apis/studentApis';

function App() {
  const [students, setStudents] = useState([]);

  const reload = async () => {
      const data = await apis.getAllStudents();
      setStudents(data);
  }
  useEffect(() => {
    reload();
  }, [])

  const addStudent = async (student) => {
    await apis.addStudent(student);
    reload();
  }

  const deleteStudent = async (id) => {
    await apis.deleteStudent(id);
    reload();
  }

  return (
    <div className="App">
      <header>
        Student Registration
      </header>
      <main className="container">
          <div className='w-50'>
            <CreateStudentForm addStudent={addStudent} />
            <StudentList students={students} deleteStudent={deleteStudent} />
          </div>
      </main>
      <footer>
        <div>
          CS472-WAP
        </div>
        <div className="margin-left-auto">
          &copy; October 2024
        </div>
      </footer>
    </div>
  );
}

export default App;
