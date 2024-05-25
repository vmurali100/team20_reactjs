import { Component } from "react"


export class MusicPlayer extends Component{
    state ={
        currentsong:"hula",
        playlist:"no",
        play:"check",
        pause:function(){ },
        skip:function(){ },
        shufflesongs:function(){ },
         
 render(){
    return <div>
        <p>{this.state.currentsong}</p>
        <p>{this.state.playlist}</p>
        <p>{this.state.play}</p>

    </div>
 }
}
}