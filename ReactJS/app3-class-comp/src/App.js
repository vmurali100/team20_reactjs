import logo from './logo.svg';
import './App.css';
import { Person } from './Person';
import { PersonFunctional } from './PersonFunctional';
import { StudentEnrollmentSystem } from './Assignments_Class/StudentEnrollmentSystem';
import { Person_Parent } from './Assignments_Class/Person_Parent';
import { User } from './Assignments_Class/User';

function App() {
  return (
    <div className="App">
     {/* <Person/> */}
     {/* <PersonFunctional/> */}
     {/* <StudentEnrollmentSystem/> */}
     {/* <Person_Parent/> */}
     <User/>
    </div>
  );
}

export default App;
