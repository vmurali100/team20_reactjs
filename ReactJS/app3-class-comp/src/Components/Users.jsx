import React, { Component } from "react";

export default class Users extends Component {
    constructor(){
        super()
        this.state={
            allUsers:[]
        }
    }
    getUsers=()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data)
            const newState = {...this.state}
            newState.allUsers = data;
            this.setState(newState)
        })
    }
  render() {
    return (
      <div>
        <h2>Welcome to Users </h2>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
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
                {this.state.allUsers.map((usr)=>{
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
    );
  }

  componentDidMount(){
    this.getUsers()
  }
}
