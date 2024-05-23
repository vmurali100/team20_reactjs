import { useState } from 'react'

export function Studentenrollmentsystem() {
  const [Studentenrollmentsystem] = useState({
    student_ID: 2002,
    Name: 'Hima',
    courseErolled: 'frontend',
    addnewstudent: function () { },
    removestudent: function () { },
    updatecourse: function () { },
  })

  return (
    <div>
      <ul>
        {Object.keys(Studentenrollmentsystem).map((key) => {
          return <li>{Studentenrollmentsystem[key]}</li>
        })}
      </ul>
    </div>
  )
}


