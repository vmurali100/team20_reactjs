import { Component } from "react";

export class StudentEnrollmentSystem extends Component {
  state = {
    studentId: 123,
    stdentname: {
      fname: "",
      lname: "",
      email: "",
    },
    stuednts:["Guru", "Tilak", "Syamn", "Sundar"],
    coursedEnroller: [],
  };

  addNewStudent = () => {
    const newState = {...this.state} // Creating a Copy 
    newState.stuednts.push("Kiran");
    this.setState(newState);
  };
  removeStudent = () => {
    const newState = {...this.state}
    newState.stuednts.pop();
    this.setState(newState)
  };
  updateStudent = () => {
    const newState = {...this.state}
    newState.stuednts.splice(2,0,"Ravi");
    this.setState(newState)
  };

  render() {
    return <div>
        <button onClick={this.addNewStudent}>Add Student</button> <br /><br />
        <button onClick={this.removeStudent}>Remove Student</button> <br /><br />
        <button onClick={this.updateStudent}>Update Student</button> <br /><br />
        <ul>
            {this.state.stuednts.map((val)=> <li>{val}</li> )}
        </ul>
    </div>;
  }
}
