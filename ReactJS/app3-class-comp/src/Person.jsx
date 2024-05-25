import { Component } from "react";

export class Person extends Component {
  //   state = {
  //     user: {
  //       fname: "Ram",
  //       lname: "krishn",
  //     },
  //   };
  constructor() {
    super();
    this.state = {
      user: {
        fname: "Ram",
        lname: "krishn",
      },
      message: "Welcome to Class Component",
      persons: ["Guru", "Tilak", "Syamn", "Sundar"],
    };
  }
  changeMessage = () => {
    const newMessage = { ...this.state }; // Copy State Object
    newMessage.message = "Changing the Old Message";
    this.setState(newMessage);
  };
  changeObjectValues = () => {
    const newMessage = { ...this.state }; // Copy State Object
    newMessage.user = {
      fname: "Kiran",
      lname: "Kumar",
    };
    this.setState(newMessage);
  };
  changePersons = () => {
    const newMessage = { ...this.state };
    newMessage.persons = ["RR", "KK", "SS"];
    this.setState(newMessage);
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <h2>Welcome to Class Component </h2>
        {/* <p>{this.state.user.fname}</p> */}
        {/* {Object.values(user).map((val)=> <p>{val}</p> )} */}
        {/* <p>{fname}</p>
        <p>{lname}</p> */}

        <button onClick={this.changeMessage}>Change Message</button>
        <h2>{this.state.message}</h2>
        <hr />
        <button onClick={this.changeObjectValues}>Change Object</button>
        <ul>
          {Object.values(this.state.user).map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <hr />
        <button onClick={this.changePersons}>Change persons</button>
        <ul>
          {this.state.persons.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}
