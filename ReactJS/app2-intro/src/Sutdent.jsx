import { useState } from "react";
import "./student.css";
export const Student = () => {
  const [myName] = useState("Murali Krishna");
  const [person] = useState({
    fname: "Ram",
    lname: "Ravi",
    email: "ram@gmail.com",
  });
  let [students] = useState(["Ram", "Ravi", "Sam", "Kiran", "Kumar"]);
  return (
    <div id="myDiv">
      <h2>Welcome to {myName} Component !!!</h2>
      <ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
        <li>{person.email}</li>
      </ul>

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
