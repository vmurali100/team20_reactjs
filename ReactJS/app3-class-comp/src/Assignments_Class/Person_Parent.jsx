import { Component } from "react";
import { Person_Child } from "./Person_Child";

export class Person_Parent extends Component {
  state = {
    persons: [
      {
        id: 1,
        email: "LGhormley@lorem.net",
        username: "MWhisler",
        password: "2N0ZS",
      },
      {
        id: 2,
        email: "SJohnson@sed.io",
        username: "MProia",
        password: "3Mkds",
      },
      {
        id: 3,
        email: "NHanks@in.gov",
        username: "JRainwater",
        password: "MIJCm",
      },
      {
        id: 4,
        email: "JSchuplin@porta.org",
        username: "ABorgford",
        password: "nAzgv",
      },
      {
        id: 5,
        email: "MKrasowski@consequat.io",
        username: "HSteele",
        password: "xvaFr",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.persons.map((person,i) => {
          return (
           <Person_Child newPerson={person} key={i}/>
          );
        })}
      </div>
    );
  }
}
