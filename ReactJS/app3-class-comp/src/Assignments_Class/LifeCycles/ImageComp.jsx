import React, { Component } from 'react'

export default class ImageComp extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Called !!")
    }
  render() {
    return (
      <div>
        <img width={500} src="https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.jpg?s=2048x2048&w=is&k=20&c=zOc_R464oXkyu-nVcwaR22f6Ot7o2idIP74cFAPtN4A=" alt="" />
      </div>
    )
  }
}
