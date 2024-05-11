import { useState } from "react";
import "./student.css";
export const Student = () => {
  const [myName, setMyname] = useState("Murali Krishna"); // UseState Hook
  const [person, setPerson] = useState({
    fname: "Ram",
    lname: "Ravi",
    email: "ram@gmail.com",
  });
  let [students, setStudents] = useState([
    "Ram",
    "Ravi",
    "Sam",
    "Kiran",
    "Kumar",
  ]);

  const changeStudentName = () => {
    setMyname("Nethaji !!");
  };

  const changePersonDetails = () => {
    setPerson({
      fname: "Hima",
      lname: "Deep",
      email: "himadeep@gmail.com",
    });
  };

  const changeUsers = () => {
    setStudents(["Hiumadeep", "Sai", "Nethaji", "Dinesh", "Vijay"]);
  };
  return (
    <div id="myDiv">
      <button
        onClick={() => {
          setMyname("Nethaji !!");
        }}
      >
        Change Name
      </button>
      <h2>Welcome to {myName} Component !!!</h2>

      <button onClick={changePersonDetails}>Change Person Details</button>
      <ul>
        {/* <li>{person.fname}</li>
        <li>{person.lname}</li>
        <li>{person.email}</li> */}
        {Object.values(person).map((val) => {
          return <li>{val}</li>;
        })}
      </ul>

      <button onClick={changeUsers}>Change Users</button>
      <ul>
        {students.map(function (std) {
          return <li>{std}</li>;
        })}
      </ul>
    </div>
  );
};

// ES5 way of Creating Function
// function StudentS(){}
