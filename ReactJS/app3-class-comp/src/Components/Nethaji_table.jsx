import React from 'react'

const Nethaji_table = ({submissions}) => {
  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Course</th>
            <th>Branch</th>
            <th>Rollno</th>
            <th>Email</th>
            <th>Username</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.id}</td>
              <td>{submission.name}</td>
              <td>{submission.course}</td>
              <td>{submission.branch}</td>
              <td>{submission.rollno}</td>
              <td>{submission.email}</td>
              <td>{submission.username}</td>
              <td>{submission.about}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Nethaji_table
