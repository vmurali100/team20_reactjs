import { Component  } from "react";

export class WeatherApp extends Component {
  state = {
    posttitle: "li",
    person: {
      temperature: "60%c",
      humidity: "nv",
      windspeed: "cm",
    },
    student: ["gop", "sai", "kumi", "hima"],
    date: ["4,5,8"],
  };

  updateweatherdata = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "55%C");
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.updateweatherdata}>updateweatherdata</button>{" "}
        <br />
        <br />
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.temperature}</p>
          <p>{this.state.person.humidity}</p>
          <p>{this.state.person.windspeed}</p>
        </ul>
      </div>
    );
  }
}
