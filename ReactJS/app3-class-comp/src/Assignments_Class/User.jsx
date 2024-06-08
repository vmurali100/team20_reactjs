import { Component } from "react";

export class User extends Component {
  state = {
    userDetails: {
      fname: "",
      lname: "",
      email: "",
    },
    allUsers: [],
    showUpdateBtn: false,
    index: null,
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    // 3 Steps. Are required to Change the State in Class Component
    // Copy the State
    // Change the Value
    // Update the State
    const newState = { ...this.state };
    newState.userDetails[inputName] = e.target.value;
    this.setState(newState);
  };

  addUser = () => {
    const newState = { ...this.state };
    newState.allUsers.push({ ...this.state.userDetails });
    this.setState(newState);
    this.clearForm();
  };

  clearForm = () => {
    const newState = { ...this.state };
    newState.userDetails = {
      fname: "",
      lname: "",
      email: "",
    };
    this.setState(newState);
  };

  deleteUser = (i) => {
    const newState = { ...this.state };
    newState.allUsers.splice(i, 1);
    this.setState(newState);
  };
  editUser = (obj, i) => {
    const newState = { ...this.state };
    newState.userDetails = obj;
    newState.showUpdateBtn = true;
    newState.index = i;
    this.setState(newState);
  };

  updateUser = () => {
    const newState = { ...this.state };
    newState.allUsers[this.state.index] = this.state.userDetails;
    newState.showUpdateBtn = false;
    this.setState(newState);
  };
  render() {
    return (
      <div>
        <h2>Welcome to ReactJS Forms</h2>
        <hr />
        <form>
          <label htmlFor="">First Name </label>
          <input
            type="text"
            name="fname"
            value={this.state.userDetails.fname}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Last Name </label>
          <input
            type="text"
            name="lname"
            value={this.state.userDetails.lname}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Email </label>
          <input
            type="text"
            name="email"
            value={this.state.userDetails.email}
            onChange={this.handleChange}
          />{" "}
          <br />
          {this.state.showUpdateBtn ? (
            <button type="button" onClick={this.updateUser}>
              Update User
            </button>
          ) : (
            <button type="button" onClick={this.addUser}>
              Add User
            </button>
          )}
        </form>

        <table border={1}>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Edit User</td>
              <td>Delete User</td>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((obj, i) => {
              return (
                <tr>
                  <td>{obj.fname}</td>
                  <td>{obj.lname}</td>
                  <td>{obj.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.editUser(obj, i);
                      }}
                    >
                      Edit User
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.deleteUser(i);
                      }}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
