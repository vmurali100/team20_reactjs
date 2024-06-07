
import { Component } from "react";


export class BlogPostManager extends Component {
  state = {
    persons: [
      {
        titile: "exam",
        Author: "cha",
        name: "reddy",
        mail: "gopi@143",
      },
      {
        titile: "th",
        Author: "hg",
        name: "Hema",
        mail: "Guna@143",
      },
      {
        titile: "paper",
        Author: "dddd",
        name: "dfdg",
        mail: "dsdfsvf@143",
      },
    ],
  };
  Addperson = () => {
    const newstate = { ...this.state };
    newstate.persons.push({
      titile: "kkkkk",
      Author: "gopi",
      name: "ghg",
      mail: "hghgg@143",
    });
    this.setState(newstate);
  };
  deleteperson = (newperson, i) => {
    const newstate = { ...this.state };
    newstate.persons.splice(i, 1);
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <h1>BlogPostManager-component</h1>
        <button onClick={this.Addperson}>Addperson</button>
        {this.state.persons.map((persons, i) => {
          return (
        <BlogPostManager
              newperson={persons}
              key={i}
              handleDelete={this.deleteperson}
              index={i}
            />
          );
        })}
        <hr />
      </div>
    );
  }
}
