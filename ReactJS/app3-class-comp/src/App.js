import logo from './logo.svg';
import './App.css';
import { Person } from './Person';
import { PersonFunctional } from './PersonFunctional';
import { StudentEnrollmentSystem } from './Assignments_Class/StudentEnrollmentSystem';
import { Person_Parent } from './Assignments_Class/Person_Parent';

function App() {
  return (
    <div className="App">
     {/* <Person/> */}
     {/* <PersonFunctional/> */}
     {/* <StudentEnrollmentSystem/> */}
     <Person_Parent/>
    </div>
  );
}

export default App;
