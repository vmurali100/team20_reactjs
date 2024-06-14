import React, { Component } from 'react'
import Child_Comp from './Child_Comp'
import ImageComp from './ImageComp'

export default class Parent_Comp extends Component {
    state={
        message:"WElcome From parent Compoentn",
        showImage:true
    }
     handleImage=()=>{
        const newState = {...this.state};
        newState.showImage = false;
        this.setState(newState)
    }
    
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <button onClick={()=>{this.setState({message:"Message Changed In parent !!!"})}}>Change Message</button>
        <button onClick={this.handleImage}>Hide Image</button>
        {this.state.showImage && <ImageComp/>}
        <hr />
        <Child_Comp msg = {this.state.message}/>
      </div>
    )
  }
}
