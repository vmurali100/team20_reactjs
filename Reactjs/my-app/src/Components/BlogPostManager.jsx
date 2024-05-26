
import { Component } from "react";

export class BlogPostManager extends Component {
  state = {
    posttitle: "ffdcg",
    person: {
      author: "hima",
      content: "cenima",
    },
    student: ["vijay", "gopi", "raju", "kumar"],
    Newposts: ["1"],
  };
  CreateNewposts = () => {
    const newstate = { ...this.state };
    newstate.student.push("kumar", "hghg");
    this.setState(newstate);
  };

  Editposts = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "ramu");
    this.setState(newstate);
  };
  Deleteposts = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.CreateNewposts}>CreateNewposts</button> <br />{" "}
        <br />
        <button onClick={this.Editposts}>Editposts</button>
        <br /> <br />
        <button onClick={this.Deleteposts}>Deleteposts</button> <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.author}</p>
          <p>{this.state.posttitle}</p>
          <p>{this.state.Newposts}</p>
        </ul>
      </div>
    );
  }
}
