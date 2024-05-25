import { Component } from "react"



export class HotelReservationSystem extends Component{
    state = {
        roomnumber: "9345717566",
        guestname:"hima",
        checkindate:"12/3/2009",
        checkoutdate:"3/4/2006",
        
        reservations: function () { }, 
        cancelreservations: function () { }, 
        checkavailability: function () { }, 
             
    }
render(){
    return <div>
        <p>{this.state.guestname}</p>
        <p>{this.state.checkindate}</p>
        <p>{this.state.checkoutdate}</p>
    </div>
}
    }
    