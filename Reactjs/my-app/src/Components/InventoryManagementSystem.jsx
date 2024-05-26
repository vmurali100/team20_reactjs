import { Component } from "react"



export class InventoryManagementSystem extends Component  {
    state = {
        productname: "car",
        quantityavailable: "second",
        price: 1000000,


        newproducts: function () { },
        updatequantities: function () { },
        removeproducts: function () { },

    }
    render() {
        return <div>
   <p>{this.state.productname}</p>
   <p>{this.state.quantityavailable}</p>
   <p>{this.state.price}</p>


        </div>
    }
}