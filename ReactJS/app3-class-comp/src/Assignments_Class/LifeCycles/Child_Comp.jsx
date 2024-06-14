import React, { Component } from 'react'

export default class Child_Comp extends Component {
    
constructor(){
    super()
    console.log("Child_Comp constructor Called !! ");
    this.state={
        message:""
    }
}

static getDerivedStateFromProps(){
    console.log("Child_Comp getDerivedStateFromProps Called !! ")
    return {}
}

shouldComponentUpdate(){
    console.log("Child_Comp shouldComponentUpdate Called !! ")
    return true
}

componentDidUpdate(){
    console.log("Child_Comp componentDidUpdate Called !! ")

}

getSnapshotBeforeUpdate(){
    console.log("Child_Comp getSnapShotbeforeUpdate Called !! ")
    return null
}
  render() {
    console.log("Child_Comp render Called !! ")
    return (
      <div>
        <h2>{this.props.msg}</h2>
      </div>
    )
  }
}
