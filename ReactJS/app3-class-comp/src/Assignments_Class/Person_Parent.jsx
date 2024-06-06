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

  // Creating a Funtion To Add Data
  // We cannot modify the State Directly In Class Component
  // We Need to Create a Copy of the State , then Do the Manipulation after that update the State

  addPerson = () => {
    const newState = { ...this.state }; // Created a Copy of State
    newState.persons.push({
      id: 6,
      email: "vmr@consequat.io",
      username: "vmr",
      password: "vmr",
    });
    this.setState(newState);
  };

  deletePerson = (newPerson,i) => {
    console.log("deletePerson Called !!",i);
    // 1. Copy the Entire State 
    // 2. Manipulate 
    // 3. Update the State ;
    const newState = { ...this.state };
    newState.persons.splice(i,1);
    this.setState(newState)
  };

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <button onClick={this.addPerson}>Add Person</button>
        {this.state.persons.map((person, i) => {
          return <Person_Child newPerson={person} key={i} handleDelete={this.deletePerson} index={i}/>;
        })}
      </div>
    );
  }
}

// Any Change in Data Can be Done in State only
// Props Can not be Modified
