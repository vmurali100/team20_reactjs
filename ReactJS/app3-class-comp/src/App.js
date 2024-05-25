import logo from './logo.svg';
import './App.css';
import { Person } from './Person';
import { PersonFunctional } from './PersonFunctional';
import { StudentEnrollmentSystem } from './Assignments_Class/StudentEnrollmentSystem';

function App() {
  return (
    <div className="App">
     {/* <Person/> */}
     {/* <PersonFunctional/> */}
     <StudentEnrollmentSystem/>
    </div>
  );
}

export default App;
