import { Component } from "react";
import "./person_child.css";
export class Person_Child extends Component {
  render() {
    const { newPerson } = this.props;
    return (
      <div style={{ border: "1px solid red" }} className="person_box">
        <ul>
          <li>{newPerson.id}</li>
          <li>{newPerson.email}</li>
          <li>{newPerson.username}</li>
          <li>{newPerson.password}</li>
        </ul>

        <button
          onClick={() => {
            this.props.handleDelete(newPerson,this.props.index);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
