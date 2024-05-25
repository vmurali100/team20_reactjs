import { Component } from "react"


export class ReceiveBook extends Component {
    state = {
        recipename:"saaaa",
        ingredients:"fhghghjk",
        instructions:"no",
        addnewrecipes:function(){ },
        removerecipes:function(){ },
        recipesbyingredients:function(){ },

        
    render() {
        return <div>
   <p>{this.state.recipename}</p>
   <p>{this.state.ingredients}</p>
   <p>{this.state.instructions}</p>


        </div>
    }
}
}