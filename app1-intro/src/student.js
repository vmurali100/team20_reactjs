import { useState } from 'react'
import './student.css'
export const Student = () => {
  const [myName] = useState('himadeep')
  const [person] = useState({
    fname: 'reddy',
    lname: 'hima',
    email: 'hima@gmail.com'
  })
  let [students] = useState(['kiran', 'gopi', 'rahul', 'somu'])
  return (
    <div id='myDiv'>
      <h2> {}Welcome to {myName} Component </h2>
      <ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
        <li>{person.email}</li>
      </ul>

      <ul>
        {students.map(function (std) {
          return <li>{std}</li>
        })}
      </ul>
    </div>
  );
}
