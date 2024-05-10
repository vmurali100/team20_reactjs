import { useState } from "react";

export function User() {
  const [age] = useState(25);
  const [person] = useState({
    fname: "Murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  });
  return (
    <div>
      <p>My Age is :{age}</p>
      <p>{person.fname}</p>
      <p>{person.lname}</p>
      <p>{person.email}</p>
    </div>
  );
}
