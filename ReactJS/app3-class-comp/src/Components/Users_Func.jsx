import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Users_Func = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getUsersFromServer()
    },[])

    const getUsersFromServer=()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data)
            setUsers(data)
        })
    }
  return (
    <div>
      <h2>Welcome to Users Functional Component !</h2>
      <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((usr)=>{
                    return <tr>
                        <td>{usr.name}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td>{usr.phone}</td>
                        <td>{usr.website}</td>
                        <td>{usr.id}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Users_Func
