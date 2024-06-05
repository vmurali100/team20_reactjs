import { Component } from "react";
import "./person_child.css";
export class Person_Child extends Component {
  render() {
    const { newPerson } = this.props;
    return (
      <div>
        <ul>
          <li>{newPerson.id}</li>
          <li>{newPerson.email}</li>
          <li>{newPerson.username}</li>
          <li>{newPerson.password}</li>
        </ul>
      </div>
    );
  }
}
