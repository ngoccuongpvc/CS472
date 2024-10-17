import 'bootstrap/dist/css/bootstrap.css';

import { StudentContext, StudentDispatchContext } from "./contexts/studentContext";
import "./App.css";
import CreateStudentForm from "./components/createStudentForm";
import StudentList from './components/StudentList';
import { useReducer } from 'react';

function App() {
  const mockStudentsData = [
    { id: 116257, name: "Anna Smith", program: "MBA" },
    { id: 615789, name: "John Doe", program: "Compro" },
    { id: 116868, name: "Tom Jerryh", program: "MBA" }
  ];

  const studentsReducer = (students, action) => {
    switch (action.type) {
      case 'added': {
        return [...students, {
          id: action.id,
          name: action.name,
          program: action.program
        }]
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  const [students, studentsDispatch] = useReducer(studentsReducer, mockStudentsData);

  return (
    <div className="App">
      <header>
        Student Registration
      </header>
      <main className="container">
        <StudentContext.Provider value={students}>
          <StudentDispatchContext.Provider value={studentsDispatch}>
            <div className='w-50'>
              <CreateStudentForm />
              <StudentList />
            </div>
          </StudentDispatchContext.Provider>
        </StudentContext.Provider>
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
