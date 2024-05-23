import {useState} from "react";

export function FlightBookingSystem(){
    const [FlightBookingSystem]=useState({
        flightnumber:"123456",
        departurecity:"ap",
        arrivalcity:"ctr",
        departuretime:function(){ },
        bookflights:function(){ },
        cancelflights:function(){ },
    })
    return (<div>
        <ul>
            {Object.keys(FlightBookingSystem).map((key) => {
                return <li>{FlightBookingSystem[key]}</li>
            })}
        </ul>
    </div>
    )
}
