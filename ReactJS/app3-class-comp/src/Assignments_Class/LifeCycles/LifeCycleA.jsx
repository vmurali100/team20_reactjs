import { Component } from "react";

export class LifeCycleA extends Component {
  render() {
    console.log("LifeCycleA render Called !!", this.props);

    return <h2>Welcome to Life Cycle Hook {this.state.ageValue} </h2>;
  }

  constructor() {
    super();
    this.state={
        ageValue:null
    }
    console.log("LifeCycleA constructor Called !!");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps Called !! ", props, state);
    return {
      ageValue: props.myAge + 10,
    };
  }

  componentDidMount(){
    console.log("LifeCycleA componentDidMount Called !! ")
  }

  shouldComponentUpdate(){
    return false
  }
}
