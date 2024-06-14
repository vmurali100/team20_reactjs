import logo from './logo.svg';
import './App.css';
import { Person } from './Person';
import { PersonFunctional } from './PersonFunctional';
import { StudentEnrollmentSystem } from './Assignments_Class/StudentEnrollmentSystem';
import { Person_Parent } from './Assignments_Class/Person_Parent';
import { User } from './Assignments_Class/User';
import { LifeCycleA } from './Assignments_Class/LifeCycles/LifeCycleA';
import { useState } from 'react';
import Parent_Comp from './Assignments_Class/LifeCycles/Parent_Comp';

function App() {
  const [myAge,setMyAge]=useState(43)
  return (
    <div className="App">
     {/* <Person/> */}
     {/* <PersonFunctional/> */}
     {/* <StudentEnrollmentSystem/> */}
     {/* <Person_Parent/> */}
     {/* <User/> */}
     {/* <button onClick={()=>{setMyAge(45)}}>Increase Age</button> */}
     {/* <LifeCycleA myAge={myAge}/> */}
     <Parent_Comp/>
    </div>
  );
}

export default App;
