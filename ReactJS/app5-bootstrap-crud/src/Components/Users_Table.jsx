import React from "react";

const Users_Table = ({ allUsers,editUser,deleteUser }) => {
  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {allUsers.map((usr,i)=>{
                return <tr key={i}>
                    <td>{usr.email}</td>
                    <td>{usr.password}</td>
                    <td>
                        <button className="btn btn-warning" onClick={()=>{editUser(usr)}}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={()=>{deleteUser(usr)}}>Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Users_Table;
