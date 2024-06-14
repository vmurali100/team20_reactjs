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
import Users from './Components/Users';
import Users_Func from './Components/Users_Func';
import RegistrationForm from './Components/Nethaji_form';

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
     {/* <Parent_Comp/> */}
     {/* <Users/> */}
     {/* <Users_Func/> */}
     <RegistrationForm/>
    </div>
  );
}

export default App;
